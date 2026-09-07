import { useEffect, useState } from "react";
import {
  createExpense,
  deleteExpense,
  getExpenses,
  updateExpense,
} from "../../services/expenses";
import { useToast } from "../context/toast/toast";
import "./expenses.css";

const categories = [
  "Food",
  "Transport",
  "Shopping",
  "Bills",
  "Health",
  "Other",
];
const currentMonth = new Date().toISOString().slice(0, 7);
const blankExpense = {
  title: "",
  amount: "",
  category: "Food",
  date: new Date().toISOString().slice(0, 10),
  notes: "",
};

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [month, setMonth] = useState(currentMonth);
  const [category, setCategory] = useState("all");
  const [form, setForm] = useState(blankExpense);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const showToast = useToast();

  const loadExpenses = async () => {
    setLoading(true);
    try {
      const data = await getExpenses(month);
      setExpenses(data);
    } catch (error) {
      showToast(
        false,
        error?.response?.data?.message || "Could not load expenses",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let active = true;
    getExpenses(month)
      .then((data) => {
        if (active) setExpenses(data);
      })
      .catch((error) => {
        if (active)
          console.error(
            error?.response?.data?.message || "Could not load expenses",
          );
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [month]);

  const visibleExpenses = expenses.filter(
    (expense) => category === "all" || expense.category === category,
  );
  const total = visibleExpenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0,
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editingId) await updateExpense(editingId, form);
      else await createExpense(form);
      showToast(true, editingId ? "Expense updated" : "Expense added");
      setForm(blankExpense);
      setEditingId(null);
      loadExpenses();
    } catch (error) {
      showToast(
        false,
        error?.response?.data?.message || "Could not save expense",
      );
    }
  };

  const startEditing = (expense) => {
    setEditingId(expense._id);
    setForm({
      title: expense.title,
      amount: expense.amount,
      category: expense.category,
      date: expense.date.slice(0, 10),
      notes: expense.notes || "",
    });
  };

  const removeExpense = async (id) => {
    try {
      await deleteExpense(id);
      showToast(true, "Expense deleted");
      loadExpenses();
    } catch (error) {
      showToast(
        false,
        error?.response?.data?.message || "Could not delete expense",
      );
    }
  };

  return (
    <main className="app-shell expenses-page">
      <header className="app-header">
        <div>
          <p className="eyebrow">Personal finance</p>
          <h1>Expense Tracker</h1>
        </div>
        <div className="expense-total">
          <span>{month}</span>
          <strong>₹{total.toFixed(2)}</strong>
          <small>monthly total</small>
        </div>
      </header>
      <section className="expense-form-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">
              {editingId ? "Update entry" : "New entry"}
            </p>
            <h2>{editingId ? "Edit expense" : "Add an expense"}</h2>
          </div>
          {editingId && (
            <button
              className="text-button"
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm(blankExpense);
              }}
            >
              Cancel edit
            </button>
          )}
        </div>
        <form className="expense-form" onSubmit={handleSubmit}>
          <label>
            Description
            <input
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="What did you spend on?"
            />
          </label>
          <label>
            Amount
            <input
              required
              min="0.01"
              step="0.01"
              type="number"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              placeholder="0.00"
            />
          </label>
          <label>
            Category
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label>
            Date
            <input
              required
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </label>
          <label className="notes-field">
            Notes
            <input
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Optional note"
            />
          </label>
          <button className="primary-button" type="submit">
            {editingId ? "Save changes" : "Add expense"}
          </button>
        </form>
      </section>
      <section className="expense-toolbar">
        <label>
          Month
          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </label>
        <label>
          Category
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All categories</option>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <span>
          {visibleExpenses.length}{" "}
          {visibleExpenses.length === 1 ? "expense" : "expenses"}
        </span>
      </section>
      <section className="card-grid">
        {loading ? (
          <div className="empty-state">Loading expenses...</div>
        ) : visibleExpenses.length ? (
          visibleExpenses.map((expense) => (
            <article className="expense-card" key={expense._id}>
              <div className="expense-card-top">
                <span className="category-tag">{expense.category}</span>
                <strong>₹{Number(expense.amount).toFixed(2)}</strong>
              </div>
              <h2>{expense.title}</h2>
              <p className="expense-date">
                {new Date(expense.date).toLocaleDateString()}
              </p>
              {expense.notes && (
                <p className="expense-notes">{expense.notes}</p>
              )}
              <div className="card-actions">
                <button
                  className="edit-button"
                  onClick={() => startEditing(expense)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => removeExpense(expense._id)}
                >
                  Delete
                </button>
              </div>
            </article>
          ))
        ) : (
          <div className="empty-state">No expenses found for this view.</div>
        )}
      </section>
    </main>
  );
}

export default Expenses;

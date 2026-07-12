import { useState, useEffect } from "react";

function MaintenanceForm({
  open,
  onClose,
  maintenance,
  setMaintenance,
  editingItem,
}) {
  const [form, setForm] = useState({
    vehicle: "",
    service: "",
    mechanic: "",
    dueDate: "",
    cost: "",
    status: "Pending",
  });

  useEffect(() => {
    if (editingItem) {
      setForm(editingItem);
    } else {
      setForm({
        vehicle: "",
        service: "",
        mechanic: "",
        dueDate: "",
        cost: "",
        status: "Pending",
      });
    }
  }, [editingItem]);

  if (!open) return null;

  const handleSubmit = () => {
    if (editingItem) {
      setMaintenance(
        maintenance.map((m) =>
          m.id === editingItem.id ? { ...form, id: editingItem.id } : m
        )
      );
    } else {
      setMaintenance([
        ...maintenance,
        {
          ...form,
          id: Date.now(),
        },
      ]);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl shadow-xl w-[520px] p-8">

        <h2 className="text-3xl font-bold mb-6">
          {editingItem ? "Edit Maintenance" : "Schedule Maintenance"}
        </h2>

        <div className="space-y-4">

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Vehicle"
            value={form.vehicle}
            onChange={(e) =>
              setForm({ ...form, vehicle: e.target.value })
            }
          />

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Service"
            value={form.service}
            onChange={(e) =>
              setForm({ ...form, service: e.target.value })
            }
          />

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Mechanic"
            value={form.mechanic}
            onChange={(e) =>
              setForm({ ...form, mechanic: e.target.value })
            }
          />

          <input
            type="date"
            className="w-full border rounded-lg p-3"
            value={form.dueDate}
            onChange={(e) =>
              setForm({ ...form, dueDate: e.target.value })
            }
          />

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Cost"
            value={form.cost}
            onChange={(e) =>
              setForm({ ...form, cost: e.target.value })
            }
          />

          <select
            className="w-full border rounded-lg p-3"
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
          >
            <option>Pending</option>
            <option>Completed</option>
            <option>Overdue</option>
          </select>

        </div>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="border px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            {editingItem ? "Update" : "Add"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default MaintenanceForm;
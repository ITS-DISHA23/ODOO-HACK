import { useState, useEffect } from "react";
import API from "../api/vehicleApi";

function VehicleForm({
  vehicles,
  setVehicles,
  editingVehicle,
  setEditingVehicle,
}) {
  const [show, setShow] = useState(false);

  const emptyForm = {
    registration: "",
    name: "",
    type: "",
    capacity: "",
    status: "Available",
  };

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (editingVehicle) {
      setForm(editingVehicle);
      setShow(true);
    }
  }, [editingVehicle]);

  const saveVehicle = async () => {
    if (
      !form.registration ||
      !form.name ||
      !form.type ||
      !form.capacity
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      // UPDATE VEHICLE
      if (editingVehicle) {
        await API.put(`/vehicles/${editingVehicle.id}`, form);
        setEditingVehicle(null);
      }
      // ADD VEHICLE
      else {
        await API.post("/vehicles", form);
      }

      // Reload vehicles from database
      const res = await API.get("/vehicles");
      setVehicles(res.data);

      // Reset form
      setForm(emptyForm);
      setShow(false);
    } catch (err) {
      console.error(err);
      alert("Error saving vehicle.");
    }
  };

  const closeModal = () => {
    setShow(false);
    setEditingVehicle(null);
    setForm(emptyForm);
  };

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        + Add Vehicle
      </button>

      {show && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-[420px]">

            <h2 className="text-xl font-bold mb-4">
              {editingVehicle ? "Edit Vehicle" : "Add Vehicle"}
            </h2>

            <div className="space-y-3">

              <input
                className="border w-full p-2 rounded"
                placeholder="Registration Number"
                value={form.registration}
                onChange={(e) =>
                  setForm({
                    ...form,
                    registration: e.target.value,
                  })
                }
              />

              <input
                className="border w-full p-2 rounded"
                placeholder="Vehicle Name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />

              <input
                className="border w-full p-2 rounded"
                placeholder="Vehicle Type"
                value={form.type}
                onChange={(e) =>
                  setForm({
                    ...form,
                    type: e.target.value,
                  })
                }
              />

              <input
                className="border w-full p-2 rounded"
                placeholder="Capacity"
                value={form.capacity}
                onChange={(e) =>
                  setForm({
                    ...form,
                    capacity: e.target.value,
                  })
                }
              />

              <select
                className="border w-full p-2 rounded"
                value={form.status}
                onChange={(e) =>
                  setForm({
                    ...form,
                    status: e.target.value,
                  })
                }
              >
                <option>Available</option>
                <option>On Trip</option>
                <option>Maintenance</option>
              </select>

            </div>

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={closeModal}
                className="border px-4 py-2 rounded hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={saveVehicle}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                {editingVehicle ? "Update" : "Save"}
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default VehicleForm;
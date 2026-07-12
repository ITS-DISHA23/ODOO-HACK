import { useState, useEffect } from "react";

function DriverForm({
  drivers,
  setDrivers,
  editingDriver,
  setEditingDriver,
}) {
  const [show, setShow] = useState(false);

  const emptyForm = {
    name: "",
    license: "",
    phone: "",
    experience: "",
    status: "Available",
  };

  const [form, setForm] = useState(emptyForm);

  // Open modal when editing a driver
  useEffect(() => {
    if (editingDriver) {
      setForm(editingDriver);
      setShow(true);
    }
  }, [editingDriver]);

  const saveDriver = () => {
    if (
      !form.name ||
      !form.license ||
      !form.phone ||
      !form.experience
    ) {
      alert("Please fill all fields");
      return;
    }

    // EDIT DRIVER
    if (editingDriver) {
      const updatedDrivers = drivers.map((driver) =>
        driver.id === editingDriver.id ? form : driver
      );

      setDrivers(updatedDrivers);
      setEditingDriver(null);
    }
    // ADD DRIVER
    else {
      setDrivers([
        ...drivers,
        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    // Reset Form
    setForm(emptyForm);
    setShow(false);
  };

  const closeModal = () => {
    setShow(false);
    setEditingDriver(null);
    setForm(emptyForm);
  };

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        + Add Driver
      </button>

      {show && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white rounded-xl p-6 w-[420px]">

            <h2 className="text-xl font-bold mb-4">
              {editingDriver ? "Edit Driver" : "Add Driver"}
            </h2>

            <div className="space-y-3">

              <input
                className="border w-full p-2 rounded"
                placeholder="Driver Name"
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
                placeholder="License Number"
                value={form.license}
                onChange={(e) =>
                  setForm({
                    ...form,
                    license: e.target.value,
                  })
                }
              />

              <input
                className="border w-full p-2 rounded"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
              />

              <input
                type="number"
                className="border w-full p-2 rounded"
                placeholder="Experience (Years)"
                value={form.experience}
                onChange={(e) =>
                  setForm({
                    ...form,
                    experience: e.target.value,
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
                <option>Assigned</option>
                <option>Off Duty</option>
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
                onClick={saveDriver}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                {editingDriver ? "Update" : "Save"}
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default DriverForm;
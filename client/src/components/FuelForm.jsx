import { useState } from "react";

function FuelForm({
  fuelLogs,
  setFuelLogs,
  vehicles,
  drivers,
}) {
  const [show, setShow] = useState(false);

  const emptyForm = {
    vehicle: "",
    driver: "",
    fuelType: "Diesel",
    liters: "",
    cost: "",
    odometer: "",
    date: "",
  };

  const [form, setForm] = useState(emptyForm);

  const saveFuelLog = () => {
    if (
      !form.vehicle ||
      !form.driver ||
      !form.liters ||
      !form.cost ||
      !form.odometer ||
      !form.date
    ) {
      alert("Please fill all fields");
      return;
    }

    setFuelLogs([
      ...fuelLogs,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm(emptyForm);
    setShow(false);
  };

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        + Add Fuel Log
      </button>

      {show && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-[450px]">

            <h2 className="text-xl font-bold mb-4">
              Add Fuel Log
            </h2>

            <div className="space-y-3">

              <select
                className="border w-full p-2 rounded"
                value={form.vehicle}
                onChange={(e) =>
                  setForm({ ...form, vehicle: e.target.value })
                }
              >
                <option value="">Select Vehicle</option>

                {vehicles.map((v) => (
                  <option key={v.id}>
                    {v.registration}
                  </option>
                ))}
              </select>

              <select
                className="border w-full p-2 rounded"
                value={form.driver}
                onChange={(e) =>
                  setForm({ ...form, driver: e.target.value })
                }
              >
                <option value="">Select Driver</option>

                {drivers.map((d) => (
                  <option key={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>

              <select
                className="border w-full p-2 rounded"
                value={form.fuelType}
                onChange={(e) =>
                  setForm({ ...form, fuelType: e.target.value })
                }
              >
                <option>Diesel</option>
                <option>Petrol</option>
                <option>CNG</option>
                <option>Electric</option>
              </select>

              <input
                className="border w-full p-2 rounded"
                placeholder="Fuel (Liters)"
                value={form.liters}
                onChange={(e) =>
                  setForm({ ...form, liters: e.target.value })
                }
              />

              <input
                className="border w-full p-2 rounded"
                placeholder="Cost (₹)"
                value={form.cost}
                onChange={(e) =>
                  setForm({ ...form, cost: e.target.value })
                }
              />

              <input
                className="border w-full p-2 rounded"
                placeholder="Odometer"
                value={form.odometer}
                onChange={(e) =>
                  setForm({ ...form, odometer: e.target.value })
                }
              />

              <input
                type="date"
                className="border w-full p-2 rounded"
                value={form.date}
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
              />

            </div>

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => setShow(false)}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={saveFuelLog}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default FuelForm;
import { useState } from "react";

function TripForm({
  trips,
  setTrips,
  vehicles,
  setVehicles,
  drivers,
  setDrivers,
}) {
  const [show, setShow] = useState(false);

  const emptyForm = {
    vehicle: "",
    driver: "",
    source: "",
    destination: "",
    date: "",
    status: "In Progress",
  };

  const [form, setForm] = useState(emptyForm);

  // Only available vehicles
  const availableVehicles = vehicles.filter(
    (v) => v.status === "Available"
  );

  // Only available drivers
  const availableDrivers = drivers.filter(
    (d) => d.status === "Available"
  );

  const assignTrip = () => {
    if (
      !form.vehicle ||
      !form.driver ||
      !form.source ||
      !form.destination ||
      !form.date
    ) {
      alert("Please fill all fields");
      return;
    }

    // Add Trip
    setTrips([
      ...trips,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    // Update Vehicle Status
    setVehicles(
      vehicles.map((vehicle) =>
        vehicle.registration === form.vehicle
          ? { ...vehicle, status: "On Trip" }
          : vehicle
      )
    );

    // Update Driver Status
    setDrivers(
      drivers.map((driver) =>
        driver.name === form.driver
          ? { ...driver, status: "Assigned" }
          : driver
      )
    );

    setForm(emptyForm);
    setShow(false);
  };

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        + Assign Trip
      </button>

      {show && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-[500px]">

            <h2 className="text-2xl font-bold mb-5">
              Assign Trip
            </h2>

            <div className="space-y-4">

              <select
                className="border w-full p-2 rounded"
                value={form.vehicle}
                onChange={(e) =>
                  setForm({
                    ...form,
                    vehicle: e.target.value,
                  })
                }
              >
                <option value="">Select Vehicle</option>

                {availableVehicles.map((vehicle) => (
                  <option
                    key={vehicle.id}
                    value={vehicle.registration}
                  >
                    {vehicle.registration} - {vehicle.name}
                  </option>
                ))}
              </select>

              <select
                className="border w-full p-2 rounded"
                value={form.driver}
                onChange={(e) =>
                  setForm({
                    ...form,
                    driver: e.target.value,
                  })
                }
              >
                <option value="">Select Driver</option>

                {availableDrivers.map((driver) => (
                  <option
                    key={driver.id}
                    value={driver.name}
                  >
                    {driver.name}
                  </option>
                ))}
              </select>

              <input
                className="border w-full p-2 rounded"
                placeholder="Source"
                value={form.source}
                onChange={(e) =>
                  setForm({
                    ...form,
                    source: e.target.value,
                  })
                }
              />

              <input
                className="border w-full p-2 rounded"
                placeholder="Destination"
                value={form.destination}
                onChange={(e) =>
                  setForm({
                    ...form,
                    destination: e.target.value,
                  })
                }
              />

              <input
                type="date"
                className="border w-full p-2 rounded"
                value={form.date}
                onChange={(e) =>
                  setForm({
                    ...form,
                    date: e.target.value,
                  })
                }
              />

            </div>

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => {
                  setShow(false);
                  setForm(emptyForm);
                }}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={assignTrip}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Assign
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default TripForm;
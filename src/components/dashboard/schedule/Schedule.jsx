import React, { useEffect, useState } from "react";
import { CalendarDays, CheckCircle2, BookOpen, Flame } from "lucide-react";
import "./Schedule.css";
import { getDailyScheduleApi } from "../../../shared/api/apiHelper";

const iconMap = {
  meeting: Flame,
  task: CheckCircle2,
  reminder: BookOpen,
};

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  const today = "2025-03-05";

  useEffect(() => {
    setLoading(true);

    getDailyScheduleApi(today)
      .then((res) => {
        if (res.data?.success) {
          setSchedules(res.data.data);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="schedule-wrapper">
      <div className="schedule-card shadow-sm">
        {/* Header */}
        <div className="schedule-header">
          <h6 className="mb-1">Today, 05 March</h6>

          <div className="week-row">
            {[
              { day: "Mon", date: "03" },
              { day: "Tue", date: "04" },
              { day: "Wed", date: "05", active: true },
              { day: "Thu", date: "06" },
              { day: "Fri", date: "07" },
            ].map((item, index) => (
              <div
                key={index}
                className={`day-box ${item.active ? "active" : ""}`}
              >
                <span className="date">{item.date}</span>
                <span className="day">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="schedule-body">
          {loading ? (
            <ScheduleSkeleton />
          ) : schedules.length === 0 ? (
            <div className="text-muted small text-center py-3">
              No schedules for today
            </div>
          ) : (
            schedules.map((item) => {
              const Icon = iconMap[item.type] || CalendarDays;

              return (
                <div className="time-slot mb-3" key={item.id}>
                  <div className="row align-items-start gx-3">
                    {/* Time Column */}
                    <div className="col-auto">
                      <span className="time text-muted fw-semibold">
                        {formatTime(item.time)}
                      </span>
                    </div>

                    {/* Event Card Column */}
                    <div className="col">
                      <div
                        className={`event-card event-${item.type} d-flex align-items-start gap-2 p-3`}
                      >
                        <Icon size={16} className="mt-1 flex-shrink-0" />

                        <div>
                          <h6 className="mb-1 fw-semibold">{item.title}</h6>
                          <p className="mb-0 text-muted small">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;

/* Helpers */
const formatTime = (time) => {
  const [h, m] = time.split(":");
  const hour = Number(h);
  const suffix = hour >= 12 ? "pm" : "am";
  const formatted = hour % 12 || 12;
  return `${formatted}:${m} ${suffix}`;
};

/* Skeleton Component */
const ScheduleSkeleton = () => {
  return (
    <>
      {[1, 2, 3].map((_, i) => (
        <div className="time-slot" key={i}>
          <span className="time skeleton skeleton-time" />
          <div className="event-card skeleton skeleton-card" />
        </div>
      ))}
    </>
  );
};

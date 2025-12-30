import { useEffect, useState } from "react";
import { Card, Form, Placeholder, Button } from "react-bootstrap";
import { getProjectsApi } from "../../../shared/api/apiHelper";

const ProjectsTable = () => {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async (pageNo = 1, statusFilter = "") => {
    setLoading(true);
    try {
      const res = await getProjectsApi(pageNo, statusFilter); 
      const data = res.data.data;
      setProjects(data.data); 
      setPage(data.current_page);
      setLastPage(data.last_page);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const skeletonRows = Array.from({ length: 3 }).map((_, idx) => (
    <div key={idx} className="d-flex justify-content-between align-items-center py-3 border-bottom">
      <div className="flex-1">
        <Placeholder as="span" animation="glow"><Placeholder xs={8} /></Placeholder>
      </div>
      <div className="flex-1 text-center">
        <Placeholder as="span" animation="glow"><Placeholder xs={6} /></Placeholder>
      </div>
      <div className="flex-1 text-center">
        <Placeholder as="span" animation="glow"><Placeholder xs={5} /></Placeholder>
      </div>
      <div className="flex-1 text-center">
        <Placeholder as="span" animation="glow"><Placeholder xs={4} /></Placeholder>
      </div>
      <div className="flex-1 text-end">
        <Placeholder as="span" animation="glow"><Placeholder xs={3} /></Placeholder>
      </div>
    </div>
  ));

  return (
    <Card className="p-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h6 className="mb-0">Projects</h6>
          <small className="text-muted">Overall Projects</small>
        </div>

        <Form.Select
          size="sm"
          style={{ width: 160 }}
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            fetchProjects(1, e.target.value);
          }}
        >
          <option value="">All Status</option>
          <option value="completed">Completed</option>
          <option value="ongoing">Ongoing</option>
        </Form.Select>
      </div>

      <div className="d-flex flex-column">
        {/* Table Header */}
        <div className="d-flex justify-content-between fw-bold text-muted py-2 border-bottom">
          <div className="flex-1">Project</div>
          <div className="flex-1 text-center">Client</div>
          <div className="flex-1 text-center">Role</div>
          <div className="flex-1 text-center">Date</div>
          <div className="flex-1 text-end">Status</div>
        </div>

        {/* Table Rows */}
        {loading ? (
          skeletonRows
        ) : projects.length ? (
          projects.map((p) => (
            <div key={p.id} className="d-flex justify-content-between align-items-center py-3 border-bottom">
              <div className="flex-1">{p.name}</div>
              <div className="flex-1 text-center">{p.client}</div>
              <div className="flex-1 text-center">{p.role}</div>
              <div className="flex-1 text-center">{new Date(p.start_date).toLocaleDateString()}</div>
              <div className="flex-1 text-end">
                <span
                  className={`badge px-3 py-2 ${
                    p.status === "completed"
                      ? "bg-dark"
                      : "bg-light text-dark border"
                  }`}
                  style={{ borderRadius: "20px" }}
                >
                  {p.status.charAt(0).toUpperCase() + p.status.slice(1)}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4">No projects found</div>
        )}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-end gap-2 mt-3">
        <Button
          size="sm"
          variant="outline-secondary"
          disabled={page === 1}
          onClick={() => fetchProjects(page - 1, status)}
        >
          Prev
        </Button>

        <Button
          size="sm"
          variant="outline-secondary"
          disabled={page === lastPage}
          onClick={() => fetchProjects(page + 1, status)}
        >
          Next
        </Button>
      </div>
    </Card>
  );
};

export default ProjectsTable;

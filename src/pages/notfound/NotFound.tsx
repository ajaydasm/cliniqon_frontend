import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <h4 className="mb-3">Page Not Found</h4>
        <p className="text-muted mb-4">
          Sorry, the page you are looking for does not exist.
        </p>

        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </div>
    </div>
  )
}

export default NotFound

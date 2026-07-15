import { Link } from "react-router-dom";
import "../styles/Companies.css";

function Companies() {
  const companies = [
    {
      id: 1,
      name: "Google",
      location: "Hyderabad",
    },
    {
      id: 2,
      name: "Microsoft",
      location: "Bengaluru",
    },
    {
      id: 3,
      name: "Amazon",
      location: "Chennai",
    },
    {
      id: 4,
      name: "Infosys",
      location: "Pune",
    },
    {
      id: 5,
      name: "TCS",
      location: "Mumbai",
    },
    {
      id: 6,
      name: "Wipro",
      location: "Hyderabad",
    },
  ];

  return (
    <section className="companies">
      <h2>Top Hiring Companies</h2>

      <div className="company-container">
        {companies.map((company) => (
          <div className="company-card" key={company.id}>
            <h3>{company.name}</h3>
            <p>Location: {company.location}</p>

            <Link to="/jobs">
              <button>View Jobs</button>
            </Link>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Companies;
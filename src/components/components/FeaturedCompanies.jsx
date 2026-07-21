import "../styles/FeaturedCompanies.css";

function FeaturedCompanies() {
  const companies = [
    {
      name: "Google",
      jobs: 24,
      color: "google",
      logo: "G",
    },
    {
      name: "Microsoft",
      jobs: 18,
      color: "microsoft",
      logo: "M",
    },
    {
      name: "Amazon",
      jobs: 31,
      color: "amazon",
      logo: "A",
    },
    {
      name: "Infosys",
      jobs: 15,
      color: "infosys",
      logo: "I",
    },
  ];

  return (
    <div className="featured-companies">
      <h2>Featured Companies</h2>

      <div className="company-grid">
        {companies.map((company, index) => (
          <div className="company-card" key={index}>

            <div className={`company-avatar ${company.color}`}>
              {company.logo}
            </div>

            <h3>{company.name}</h3>

            <p>{company.jobs} Open Jobs</p>

            <button>View Jobs</button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCompanies;
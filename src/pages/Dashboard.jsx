<div className="main-content" id="dashboard"></div>
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardCards from "../components/DashboardCards";
import VacancyChart from "../components/VacancyChart";
import ProfileCard from "../components/ProfileCard";
import RecentJobs from "../components/RecentJobs";
import QuickActions from "../components/QuickActions";
import FeaturedCompanies from "../components/FeaturedCompanies";
import Statistics from "../components/Statistics";
import RecentActivity from "../components/RecentActivity";
import UpcomingInterviews from "../components/UpcomingInterviews";

import Footer from "../components/Footer Dashboard";

import "../styles/Dashboard.css";
import "../styles/Sidebar.css";
import "../styles/DashboardHeader.css";
import "../styles/DashboardCards.css";
import "../styles/VacancyChart.css";
import "../styles/ProfileCard.css";
import "../styles/RecentJobs.css";
import "../styles/QuickActions.css";
import "../styles/FeaturedCompanies.css";
import "../styles/Statistics.css";
import "../styles/RecentActivity.css";
import "../styles/UpcomingInterviews.css";

import "../styles/Footer Dashboard.css";


function Dashboard() {
  return (
    <div className="dashboard">
  <Sidebar />

  <div className="main-content">
    <DashboardHeader />

    <div className="top-section">
      <DashboardCards />
      <ProfileCard />
    </div>
    <div className="middle-section">
      <VacancyChart />
      <RecentActivity />
    </div>

    
    <div className="bottom-section">

  <div id="jobs">
    <RecentJobs />
  </div>

  <QuickActions />

</div>

<div id="companies">
  <FeaturedCompanies />
</div>

<Statistics />
<UpcomingInterviews />


<div id="contact-info" className="contact-info">
  <h3>Contact Us</h3>
  <p>📧 support@jobportal.com</p>
  <p>📞 +91 9876543210</p>
</div>






<Footer />
  </div>
</div>
   
  );
}

export default Dashboard;
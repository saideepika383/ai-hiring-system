const db = require("../config/db");

const createJob = (req, res) => {
    const { title, company, skills, experience, salary, location } = req.body;

    const sql = `
        INSERT INTO jobs (title, company, skills, experience, salary, location)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [title, company, skills, experience, salary, location],
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            }

            res.json({ message: "Job Saved Successfully" });
        }
    );
};

module.exports = { createJob };
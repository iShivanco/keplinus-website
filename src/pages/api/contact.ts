import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, company, message } = req.body;

  if (!name || !email || !company || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbx0ShDr7rJ4hgOXbEie4xruUZgGlKSMntcErJZTL3dDgX-ekQ3prNlWxGRzKF8m1ZLh/exec", {
      method: "POST",
      body: JSON.stringify({ name, email, company, message }),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    if (result.status === "success") {
      return res.status(200).json({ message: "Contact saved successfully" });
    } else {
      throw new Error("Failed to save contact");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

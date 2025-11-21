import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [key, setKey] = useState("");
  const navigate = useNavigate();

  const submit = () => {
    if (!key) return alert("Enter admin key");
    localStorage.setItem("adminKey", key);
    alert("Admin key saved. Opening admin panel.");
    navigate("/vyoobam-dev-career"); // your secret admin URL
  };

  return (
    <Box sx={{ maxWidth: 480, mx: "auto", p: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Developer Login
      </Typography>
      <TextField
        label="Secret Admin Key"
        fullWidth
        value={key}
        onChange={(e) => setKey(e.target.value)}
        sx={{ mb: 2 }}
        type="password"
      />
      <Button variant="contained" onClick={submit}>
        Open Admin Panel
      </Button>
    </Box>
  );
}

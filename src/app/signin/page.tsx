"use client";

import { useState,useEffect ,useRef} from "react";
import { Card, CardContent, TextField ,Typography,Button} from "@mui/material";
import Link from "next/link";

export default function SigninPage() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    //check password length
    if (Password.length < 4 && Password.length > 0) {
        setIsPasswordValid(false);
        setPasswordError("Password must be at least 4 characters long");
    }else {
      setIsPasswordValid(true);
      setPasswordError("");
    }
  }, [Password]);

  const handleSignIn = () => {
    console.log("signin form", { Username, Password });
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", my: 4 }}>
      <CardContent>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          helperText={passwordError}
          error={!isPasswordValid}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSignIn}
        >
          Sign In
        </Button>
                <Typography variant="body2" color="textSecondary" align="center" mt={2}>
          Don't have an account?{" "}
          <Link href="/signup" style={{ color: "blue" }}>
            Sign up
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}

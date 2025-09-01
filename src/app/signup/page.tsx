"use client";

import { useState } from "react";
import { Card, CardContent, TextField, Typography, Button, MenuItem, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

const provinces = [
  "กรุงเทพมหานคร", "กระบี่", "กาญจนบุรี", "กาฬสินธุ์", "กำแพงเพชร", "ขอนแก่น", "จันทบุรี", "ฉะเชิงเทรา", "ชลบุรี", "ชัยนาท", "ชัยภูมิ", "ชุมพร", "เชียงราย", "เชียงใหม่",
  "ตรัง", "ตราด", "ตาก", "นครนายก", "นครปฐม", "นครพนม", "นครราชสีมา", "นครศรีธรรมราช", "นครสวรรค์", "นนทบุรี", "นราธิวาส", "น่าน",
  "บึงกาฬ", "บุรีรัมย์", "ปทุมธานี", "ประจวบคีรีขันธ์", "ปราจีนบุรี", "ปัตตานี", "พระนครศรีอยุธยา", "พังงา", "พัทลุง", "พิจิตร", "พิษณุโลก", "เพชรบุรี", "เพชรบูรณ์", "แพร่",
  "ภูเก็ต", "มหาสารคาม", "มุกดาหาร", "แม่ฮ่องสอน", "ยโสธร", "ยะลา", "ร้อยเอ็ด", "ระนอง", "ระยอง", "ราชบุรี", "ลพบุรี", "ลำปาง", "ลำพูน", "เลย", "ศรีสะเกษ",
  "สกลนคร", "สงขลา", "สตูล", "สมุทรปราการ", "สมุทรสงคราม", "สมุทรสาคร", "สระแก้ว", "สระบุรี", "สิงห์บุรี", "สุโขทัย", "สุพรรณบุรี", "สุราษฎร์ธานี", "สุรินทร์",
  "หนองคาย", "หนองบัวลำภู", "อ่างทอง", "อำนาจเจริญ", "อุดรธานี", "อุตรดิตถ์", "อุทัยธานี", "อุบลราชธานี"
];

export default function SignupPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    address: "",
    province: "",
    gender: ""
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    let newErrors: any = {};

    // ตรวจสอบอีเมล
    if (!form.email.includes("@")) {
      newErrors.email = "อีเมลต้องมีสัญลักษณ์ @";
    }

    // ตรวจสอบรหัสผ่าน
    if (form.password.length < 8) {
      newErrors.password = "รหัสผ่านต้องไม่น้อยกว่า 8 ตัวอักษร";
    } else if (!/[0-9]/.test(form.password) || !/[a-zA-Z]/.test(form.password)) {
      newErrors.password = "รหัสผ่านต้องมีทั้งตัวเลขและตัวอักษร";
    }

    // ตรวจสอบชื่อ-นามสกุล
    if (!form.firstName) newErrors.firstName = "กรุณากรอกชื่อ";
    if (!form.lastName) newErrors.lastName = "กรุณากรอกนามสกุล";

    // ตรวจสอบวันเดือนปีเกิด
    if (!form.dob) {
      newErrors.dob = "กรุณาเลือกวันเดือนปีเกิด";
    } else {
      const date = new Date(form.dob);
      if (isNaN(date.getTime())) {
        newErrors.dob = "วันเดือนปีเกิดไม่ถูกต้อง";
      }
    }

    // ตรวจสอบที่อยู่
    if (!form.address) newErrors.address = "กรุณากรอกที่อยู่";

    // ตรวจสอบจังหวัด
    if (!provinces.includes(form.province)) {
      newErrors.province = "กรุณาเลือกจังหวัดที่ถูกต้อง";
    }

    // ตรวจสอบเพศ
    if (!form.gender) newErrors.gender = "กรุณาเลือกเพศ";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("ข้อมูลผู้ลงทะเบียน:", form);
      alert("ลงทะเบียนสำเร็จ!");
    } else {
      alert("กรุณากรอกข้อมูลให้ถูกต้อง");
    }
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "auto", my: 4, p: 2 }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          สมัครสมาชิก
        </Typography>

        <TextField
          label="อีเมล"
          fullWidth
          margin="normal"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />

        <TextField
          label="รหัสผ่าน"
          type="password"
          fullWidth
          margin="normal"
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
        />

        <TextField
          label="ชื่อ"
          fullWidth
          margin="normal"
          value={form.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          error={!!errors.firstName}
          helperText={errors.firstName}
        />

        <TextField
          label="นามสกุล"
          fullWidth
          margin="normal"
          value={form.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          error={!!errors.lastName}
          helperText={errors.lastName}
        />

        <TextField
          label="วันเดือนปีเกิด"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={form.dob}
          onChange={(e) => handleChange("dob", e.target.value)}
          error={!!errors.dob}
          helperText={errors.dob}
        />

        <TextField
          label="ที่อยู่"
          fullWidth
          margin="normal"
          value={form.address}
          onChange={(e) => handleChange("address", e.target.value)}
          error={!!errors.address}
          helperText={errors.address}
        />

        <TextField
          select
          label="จังหวัด"
          fullWidth
          margin="normal"
          value={form.province}
          onChange={(e) => handleChange("province", e.target.value)}
          error={!!errors.province}
          helperText={errors.province}
        >
          {provinces.map((p) => (
            <MenuItem key={p} value={p}>{p}</MenuItem>
          ))}
        </TextField>

        <FormControl component="fieldset" margin="normal" error={!!errors.gender}>
          <FormLabel component="legend">เพศ</FormLabel>
          <RadioGroup
            row
            value={form.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
          >
            <FormControlLabel value="ชาย" control={<Radio />} label="ชาย" />
            <FormControlLabel value="หญิง" control={<Radio />} label="หญิง" />
            <FormControlLabel value="ไม่ระบุ" control={<Radio />} label="ไม่ระบุ" />
          </RadioGroup>
          <Typography color="error" variant="caption">{errors.gender}</Typography>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          ลงทะเบียน
        </Button>
      </CardContent>
    </Card>
  );
}

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormData {
  accountName: string;
  email: string;
  address: string;
  fullName: string;
  position: string;
  birthDate: string;
  phone: string;
  gender: string;
}

interface ProfileDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileDialog = ({ isOpen, onClose }: ProfileDialogProps) => {
  const [formData, setFormData] = useState<FormData>({
    accountName: "",
    email: "",
    address: "",
    fullName: "Nguyễn Tuấn Anh",
    position: "Nhân viên",
    birthDate: "",
    phone: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenderChange = (value: string) => {
    setFormData({
      ...formData,
      gender: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-8" style={{ minHeight: "300px" }}>
        <DialogHeader>
          <DialogTitle>Chỉnh sửa thông tin cá nhân</DialogTitle>
          <DialogDescription>Điền đầy đủ thông tin bên dưới.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}
          >
            <div>
              <Label>Tên tài khoản</Label>
              <Input
                name="accountName"
                value={formData.accountName}
                onChange={handleChange}
                placeholder="Tên đăng nhập của bạn"
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email của bạn"
              />
            </div>
            <div>
              <Label>Họ và tên</Label>
              <Input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Tên đầy đủ của bạn"
              />
            </div>
            <div>
              <Label>Giới tính</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={handleGenderChange}
                style={{ display: "flex", gap: "10px" }}
              >
                <RadioGroupItem value="male" id="male">
                  <Label htmlFor="male">Nam</Label>
                </RadioGroupItem>
                <RadioGroupItem value="female" id="female">
                  <Label htmlFor="female">Nữ</Label>
                </RadioGroupItem>
              </RadioGroup>
            </div>
            <div>
              <Label>Ngày sinh</Label>
              <Input
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
                placeholder="YYYY-MM-DD"
              />
            </div>
            <div>
              <Label>Địa chỉ</Label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Địa chỉ nơi bạn đang sinh sống"
              />
            </div>
            <div>
              <Label>Chức vụ</Label>
              <Input
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Vị trí công việc hiện tại của bạn"
              />
            </div>
            <div>
              <Label>Số điện thoại</Label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Số điện thoại liên lạc của bạn"
              />
            </div>
          </div>

          <DialogFooter style={{ marginTop: "20px" }}>
            <Button variant="outline" onClick={onClose}>
              Hủy
            </Button>
            <Button type="submit">Lưu thay đổi</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;

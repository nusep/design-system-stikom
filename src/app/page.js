"use client";

import { useState, useCallback } from "react";

import Header from "@/components/Header";
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import Accordion from "@/components/Accordion";

import { GraduationCap, BookOpen, CalendarDays, FileText } from "lucide-react";

// Data layanan akademik
const services = [
  {
    icon: GraduationCap,
    title: "Informasi Mahasiswa",
    description: "Lihat informasi dan data akademik mahasiswa.",
  },
  {
    icon: CalendarDays,
    title: "Jadwal Perkuliahan",
    description: "Dapatkan informasi jadwal perkuliahan.",
  },
  {
    icon: BookOpen,
    title: "Informasi Mata Kuliah",
    description: "Lihat informasi mata kuliah dan pembelajaran.",
  },
  {
    icon: FileText,
    title: "Informasi Akademik",
    description: "Akses informasi administrasi akademik.",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    email: "",
    prodi: "Teknik Informatika",
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Mengubah data input
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Validasi formulir
  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!formData.nama.trim()) {
      newErrors.nama = "Nama lengkap wajib diisi.";
    }

    if (!/^\d{10}$/.test(formData.nim)) {
      newErrors.nim = "NIM harus terdiri dari tepat 10 angka.";
    }

    if (!/^[^\s@]+@stikom\.ac\.id$/i.test(formData.email)) {
      newErrors.email = "Email harus menggunakan alamat @stikom.ac.id.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsModalOpen(true);
    }
  };

  // Reset formulir
  const handleReset = () => {
    setFormData({
      nama: "",
      nim: "",
      email: "",
      prodi: "Teknik Informatika",
    });

    setErrors({});
    setSuccessMessage("");
  };

  // Menutup modal
  const handleCloseModal = useCallback(() => {
    if (!isLoading) {
      setIsModalOpen(false);
    }
  }, [isLoading]);

  // Simulasi penyimpanan
  const handleConfirmSave = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(false);

      setSuccessMessage(
        "Pendaftaran berhasil diproses. Data ini masih berupa simulasi dan belum tersimpan ke database.",
      );
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section id="beranda" className="bg-stikom-navy px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-white">
            Selamat Datang di SIAKAD STIKOM
          </h1>

          <p className="mt-3 max-w-2xl text-sm text-blue-100">
            Website layanan akademik untuk membantu mahasiswa mendapatkan
            informasi perkuliahan dan kebutuhan akademik.
          </p>
        </div>
      </section>

      {/* PENGUMUMAN */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-2xl font-bold text-slate-800">
          Pengumuman Akademik
        </h2>

        <p className="mb-5 mt-2 text-sm text-slate-500">
          Informasi dan pemberitahuan layanan akademik.
        </p>

        <div className="space-y-3">
          <Alert variant="info" title="Informasi Akademik">
            Selamat datang di halaman layanan akademik SIAKAD STIKOM 2026.
            Silakan gunakan layanan yang tersedia.
          </Alert>

          <Alert variant="warning" title="Perhatian">
            Pastikan data yang dimasukkan pada formulir pendaftaran sudah benar
            sebelum melakukan penyimpanan.
          </Alert>
        </div>
      </section>

      {/* LAYANAN AKADEMIK */}
      <section id="layanan" className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-2xl font-bold text-slate-800">Layanan Akademik</h2>

        <p className="mb-6 mt-2 text-sm text-slate-500">
          Berikut beberapa layanan akademik untuk mahasiswa.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="border border-slate-200 shadow-none"
              >
                <Icon size={25} className="mb-3 text-stikom-blue" />

                <h3 className="font-semibold text-slate-800">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {service.description}
                </p>

                <a
                  href="#pendaftaran"
                  className="mt-4 inline-block text-sm text-blue-700 hover:underline"
                >
                  Selengkapnya
                </a>
              </Card>
            );
          })}
        </div>
      </section>

      {/* FORMULIR PENDAFTARAN */}
      <section id="pendaftaran" className="bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-slate-800">
            Formulir Pendaftaran Mahasiswa
          </h2>

          <p className="mb-6 mt-2 text-sm text-slate-500">
            Silakan lengkapi data diri untuk melakukan pendaftaran.
          </p>

          <Card className="max-w-2xl border border-slate-200 shadow-none">
            {successMessage && (
              <div className="mb-5">
                <Alert variant="success">{successMessage}</Alert>
              </div>
            )}

            <h3 className="mb-1 font-semibold text-slate-800">
              Data Pendaftaran
            </h3>

            <p className="mb-5 text-sm text-slate-500">
              Masukkan data sesuai identitas mahasiswa.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                <Input
                  label="Nama Lengkap"
                  name="nama"
                  placeholder="Masukkan nama lengkap"
                  value={formData.nama}
                  onChange={handleChange}
                  error={errors.nama}
                  required
                />

                <Input
                  label="NIM"
                  name="nim"
                  placeholder="Masukkan 10 angka NIM"
                  value={formData.nim}
                  onChange={handleChange}
                  error={errors.nim}
                  inputMode="numeric"
                  maxLength={10}
                  required
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="nama@stikom.ac.id"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />

                <div>
                  <label
                    htmlFor="prodi"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Program Studi
                  </label>

                  <select
                    id="prodi"
                    name="prodi"
                    value={formData.prodi}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    required
                  >
                    <option value="Teknik Informatika">
                      Teknik Informatika
                    </option>

                    <option value="Manajemen Informatika">
                      Manajemen Informatika
                    </option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <Button type="button" variant="secondary" onClick={handleReset}>
                  Reset
                </Button>

                <Button type="submit" variant="primary">
                  Simpan Pendaftaran
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* MODAL KONFIRMASI */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Konfirmasi Pendaftaran"
      >
        <p>
          Apakah kamu yakin ingin memproses pendaftaran dengan data berikut?
        </p>

        <div className="mt-4 space-y-2 rounded bg-slate-50 p-4">
          <p>
            <strong>Nama:</strong> {formData.nama}
          </p>
          <p>
            <strong>NIM:</strong> {formData.nim}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Program Studi:</strong> {formData.prodi}
          </p>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button
            variant="secondary"
            onClick={handleCloseModal}
            disabled={isLoading}
          >
            Batal
          </Button>

          <Button
            variant="primary"
            loading={isLoading}
            onClick={handleConfirmSave}
          >
            Ya, Simpan
          </Button>
        </div>
      </Modal>

      {/* FAQ */}
      <section id="faq" className="bg-white px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-2xl font-bold text-slate-800">
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="mb-6 text-sm text-slate-500">
            Berikut beberapa informasi yang mungkin dibutuhkan mahasiswa.
          </p>

          <Accordion />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stikom-navy px-6 py-6 text-center text-white">
        <h2 className="font-bold">SIAKAD STIKOM 2026</h2>

        <p className="mt-2 text-sm text-blue-200">
          Sistem Layanan Akademik Mahasiswa
        </p>

        <p className="mt-4 text-xs text-blue-200">
          © 2026 SIAKAD STIKOM. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}

"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { signUp } from "@/lib/auth/actions";
import { registerSchema } from "@/lib/api/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { RegisterInput } from "@/lib/api/validations";

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterInput>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data: RegisterInput) => {
    setLoading(true);
    setError(null);
    const fd = new FormData();
    Object.entries(data).forEach(([k, v]) => fd.append(k, v));
    const result = await signUp(fd);
    if (result?.error) { setError(result.error); setLoading(false); }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-8 text-center text-2xl font-bold">Create Account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-premium space-y-4">
          {error && <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>}
          <Input label="Full Name" {...register("full_name")} error={errors.full_name?.message} />
          <Input label="Email" type="email" {...register("email")} error={errors.email?.message} />
          <Input label="Phone" type="tel" {...register("phone")} error={errors.phone?.message} />
          <Input label="Password" type="password" {...register("password")} error={errors.password?.message} />
          <Button type="submit" loading={loading} className="w-full">Register</Button>
        </form>
        <p className="mt-4 text-center text-sm">Already have an account? <Link href="/login" className="text-brand-blue">Sign in</Link></p>
      </div>
    </div>
  );
}

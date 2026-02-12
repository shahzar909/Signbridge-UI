
"use client";

import { useActionState, useState } from "react";
import { registerUser } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [state, formAction, isPending] = useActionState(registerUser, null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-[480px] bg-white border border-gray-200 rounded-lg p-10 md:p-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Join Signbridge
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Join our platform. Fill in your details to get started.
          </p>
        </div>

        <form className="space-y-6" action={formAction}>
          {state?.error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">
              {state.error}
            </div>
          )}

          <div className="space-y-2">
            <Label
              htmlFor="fullname"
              className="text-gray-900 text-xs font-bold uppercase tracking-widest"
            >
              Full Name
            </Label>
            <Input
              id="fullname"
              name="fullname"
              type="text"
              className="h-12 bg-white border-gray-200 rounded-lg px-4 text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-gray-900 text-xs font-bold uppercase tracking-widest"
            >
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              className="h-12 bg-white border-gray-200 rounded-lg px-4 text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-gray-900 text-xs font-bold uppercase tracking-widest"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="h-12 bg-white border-gray-200 rounded-lg px-4 pr-12 text-base"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="confirmPassword"
              className="text-gray-900 text-xs font-bold uppercase tracking-widest"
            >
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className="h-12 bg-white border-gray-200 rounded-lg px-4 pr-12 text-base"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-start gap-3 py-1">
            <Checkbox id="terms" className="rounded-sm mt-1" required />
            <Label
              htmlFor="terms"
              className="text-gray-600 text-sm font-medium cursor-pointer select-none leading-relaxed"
            >
              I agree to the{" "}
              <Link href="/terms" className="text-gray-900 font-bold hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-gray-900 font-bold hover:underline">
                Privacy Policy
              </Link>
            </Label>
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-12 bg-gray-900 text-white text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-black transition-colors disabled:opacity-70"
          >
            {isPending ? "Creating Account..." : "Create Account"}
          </Button>

          <div className="pt-8 mt-4 border-t border-gray-200 text-center">
            <p className="text-gray-600 font-medium text-sm">
              Already have an account?
              <Link
                href="/login"
                className="text-gray-900 font-bold hover:underline ml-1"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

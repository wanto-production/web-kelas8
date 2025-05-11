import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/react/ui/tabs";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { z } from "zod"

const { fieldContext, formContext } = createFormHookContexts();

const { useAppForm } = createFormHook({
  fieldComponents: {
    InputForm
  },
  formComponents: {
    ButtonForm
  },
  fieldContext,
  formContext
});

const loginSchema = z.object({
  email: z.string().email().min(5, "it is really your email?"),
  password: z.string().min(8, "password too short min length is 8!")
})

const registerSchema = loginSchema.merge(z.object({
  username: z.string().min(5, "your username too short, min length is 5")
}))


function InputForm({
  label,
  icon: Icon,
  error,
  ...props
}: {
  label: string;
  icon: React.ElementType;
  error?: any[];
} & React.ComponentProps<"input">) {
  return (
    <div className="relative space-y-1">
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300" />
        <input
          {...props}
          placeholder={label}
          className="w-full pl-10 pr-4 py-2 rounded bg-purple-950 bg-opacity-40 border border-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
      {error && <p className="text-sm text-red-400">{error?.[0]?.message}</p>}
    </div>
  );
}


function ButtonForm({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 hover:opacity-90 text-white py-2 rounded font-semibold"
    >
      {children}
    </button>
  );
}

function LoginForm() {
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    } as z.infer<typeof loginSchema>,
    validators: {
      onChange: loginSchema,
      onSubmit: loginSchema
    },
    onSubmit: ({ value }) => {
      console.log(value);
    }
  });

  return (
    <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit(e); }} className="space-y-4">
      <form.AppField name="email">
        {(field) => (
          <field.InputForm
            type="email"
            label="Email"
            icon={FaEnvelope}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            error={field.state.meta.errors}
          />
        )}
      </form.AppField>

      <form.AppField name="password">
        {(field) => (
          <field.InputForm
            type="password"
            label="Password"
            icon={FaLock}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            error={field.state.meta.errors}
          />
        )}
      </form.AppField>

      {/* Button Group */}
      <div className="flex gap-4">
        <form.ButtonForm>Login</form.ButtonForm>
        <button
          type="button"
          onClick={() => form.reset()}
          className="w-full bg-red-500 hover:opacity-90 text-white py-2 rounded font-semibold"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

function RegisterForm() {
  const form = useAppForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    } as z.infer<typeof registerSchema>,
    validators: {
      onChange: registerSchema,
      onSubmit: registerSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
    }
  });

  return (
    <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit(e); }} className="space-y-4">
      <form.AppField name="username">
        {(field) => (
          <field.InputForm
            type="text"
            label="Full Name"
            icon={FaUser}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            error={field.state.meta.errors}
          />
        )}
      </form.AppField>

      <form.AppField name="email">
        {(field) => (
          <field.InputForm
            type="email"
            label="Email"
            icon={FaEnvelope}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            error={field.state.meta.errors}
          />
        )}
      </form.AppField>

      <form.AppField name="password">
        {(field) => (
          <field.InputForm
            type="password"
            label="Password"
            icon={FaLock}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            error={field.state.meta.errors}
          />
        )}
      </form.AppField>

      {/* Button Group */}
      <div className="flex gap-4">
        <form.ButtonForm>Sign Up</form.ButtonForm>
        <button
          type="button"
          onClick={() => form.reset()}
          className="w-full bg-red-500 hover:opacity-90 text-white py-2 rounded font-semibold"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default function AuthTabs() {
  return (
    <div className="w-full max-w-md mx-auto bg-[#0f0c29] p-8 rounded-xl shadow-2xl text-white space-y-6">
      <h2 className="text-2xl font-bold text-center">Create Account</h2>
      <p className="text-center text-sm text-purple-300">Create your account now!</p>

      <Tabs defaultValue="register" className="w-full">
        <TabsList className="grid grid-cols-2 bg-purple-800 rounded mb-6 text-white">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <LoginForm />
        </TabsContent>

        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>

      <div className="text-center text-sm text-purple-300">
        Already have an account? <a href="#" className="text-purple-400 underline">Login</a>
      </div>

      <div className="flex gap-4 justify-center">
        <button className="flex-1 bg-white text-black py-2 rounded flex items-center justify-center gap-2 font-semibold">
          <i className="fab fa-google"></i>
          Google
        </button>
        <button className="flex-1 bg-blue-600 text-white py-2 rounded flex items-center justify-center gap-2 font-semibold">
          <i className="fab fa-facebook"></i>
          Facebook
        </button>
      </div>
    </div>
  );
}


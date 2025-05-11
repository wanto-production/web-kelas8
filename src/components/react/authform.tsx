import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/react/ui/tabs";
import {
  createFormHook,
  createFormHookContexts,
} from "@tanstack/react-form";

const { fieldContext, formContext } = createFormHookContexts();

const { useAppForm } = createFormHook({
  fieldComponents: {
    InputForm,
  },
  formComponents: {
    ButtonForm,
  },
  fieldContext,
  formContext,
});

type LoginValues = {
  email: string;
  password: string;
};

type RegisterValues = {
  username: string;
  email: string;
  password: string;
};

function InputForm({
  label,
  ...props
}: { label: string } & React.ComponentProps<"input">) {
  return (
    <div className="space-y-1">
      <label className="block text-sm text-purple-200 font-medium">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-2 rounded bg-purple-950 border border-purple-700 text-purple-100 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
    </div>
  );
}

function ButtonForm({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="submit"
      className="w-full bg-purple-700 hover:bg-purple-600 text-white py-2 rounded font-medium"
    >
      {children}
    </button>
  );
}

// 🔒 Login Form
function LoginForm() {
  //@ts-ignore
  const form = useAppForm<LoginValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      console.log("Login:", value);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit(e);
      }}
      className="space-y-5 text-sm"
    >
      <form.AppField name="email">
        {(field) => (
          <field.InputForm
            type="email"
            placeholder="you@example.com"
            label="Email"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      </form.AppField>

      <form.AppField name="password">
        {(field) => (
          <field.InputForm
            type="password"
            placeholder="********"
            label="Password"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      </form.AppField>

      <form.ButtonForm>Login</form.ButtonForm>
    </form>
  );
}

// 📝 Register Form
function RegisterForm() {
  //@ts-ignore
  const form = useAppForm<RegisterValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      console.log("Register:", value);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit(e);
      }}
      className="space-y-5 text-sm"
    >
      <form.AppField name="username">
        {(field) => (
          <field.InputForm
            type="text"
            placeholder="yourusername"
            label="Username"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      </form.AppField>

      <form.AppField name="email">
        {(field) => (
          <field.InputForm
            type="email"
            placeholder="you@example.com"
            label="Email"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      </form.AppField>

      <form.AppField name="password">
        {(field) => (
          <field.InputForm
            type="password"
            placeholder="********"
            label="Password"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      </form.AppField>

      <form.ButtonForm>Register</form.ButtonForm>
    </form>
  );
}

// 🌑 Main Component with Tabs
export default function AuthTabs() {
  return (
    <div className="w-full min-h-screen bg-[#1A132F] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-purple-900 p-6 rounded-xl shadow-2xl">
        <Tabs defaultValue="register" className="w-full">
          <TabsList className="flex gap-2 items-center mb-6 h-fit p-2  bg-purple-800 rounded  ">
            <TabsTrigger
              value="register"
              className="data-[state=active]:bg-white data-[state=active]:text-purple-800 text-white py-2 rounded"
            >
              Register
            </TabsTrigger>

            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-white data-[state=active]:text-purple-800 text-white py-2 rounded"
            >
              Login
            </TabsTrigger>
          </TabsList>

          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>

          <TabsContent value="login">
            <LoginForm />
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
}


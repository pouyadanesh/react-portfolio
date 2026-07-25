import { ThemeSelector } from "@ai-team-workspace/ui";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>

        <p className="text-muted-foreground">
          Manage your workspace preferences.
        </p>
      </div>

      <ThemeSelector />
    </div>
  );
}

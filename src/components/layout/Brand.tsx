import profile from "../../data/profile";

export default function Brand() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-bold text-white shadow-lg">
        MN
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white">
          {profile.name}
        </h2>

        <p className="text-sm text-slate-400">
          {profile.title}
        </p>
      </div>
    </div>
  );
}
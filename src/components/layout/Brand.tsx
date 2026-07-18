import logo from "../../assets/mn-logo.png";
import profile from "../../data/profile";

export default function Brand() {
  return (
    <a href="#" className="flex items-center gap-4">
      <img
        src={logo}
        alt={profile.name}
        className="h-20 w-20 object-contain transition duration-300 hover:scale-105"
      />

      <div>
        <h1 className="text-xl font-bold text-white">
          {profile.name}
        </h1>

        <p className="text-sm text-slate-400">
          {profile.title}
        </p>
      </div>
    </a>
  );
}
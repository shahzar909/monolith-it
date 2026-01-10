import { Linkedin, Twitter } from "lucide-react";

interface Member {
  id: number;
  name: string;
  position: string;
  bio: string;
}

export default function TeamMember({ member }: { member: Member }) {
  return (
    <div className="text-center group">
      <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-5xl font-bold">
        {member.name.split(" ").map(n => n[0]).join("")}
      </div>
      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
      <p className="text-primary-600 font-semibold mb-3">{member.position}</p>
      <p className="text-dark-600 mb-4">{member.bio}</p>
      <div className="flex justify-center space-x-4">
        <button className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
          <Linkedin size={18} />
        </button>
        <button className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
          <Twitter size={18} />
        </button>
      </div>
    </div>
  );
}
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  const profiles = [
    {
      name: "Prathamesh Kothalkar",
      title:"Full Stack Devloper",
      github: "https://github.com/Prathamesh-Kothalkar",
      instagram: "https://instagram.com/dev.prathamesh_",
      twitter: "https://twitter.com/example",
      // image: "https://example.com/image-prathamesh.jpg"
    },
    {
      name: "Bhagesh Wagh",
      title: "Web Dev",
      github: "https://github.com/Bhagesh-Wagh",
      instagram: "https://instagram.com/bhagesh",
      twitter: "https://twitter.com/bhagesh"
      // image: "https://example.com/image-bhagesh.jpg"
    },
    {
      name: "Nkhil Mahajan",
      title: "UI/UX Designer",
      github: "https://github.com/anjalisharma",
      instagram: "https://instagram.com/anjalidesigner",
      twitter: "https://twitter.com/anjalidesigner"
      // image: "https://example.com/image-anjali.jpg"
    },
    {
      name: "Rohit Verma",
      title: "Backend Specialist",
      github: "https://github.com/rohitverma",
      instagram: "https://instagram.com/rohitverma",
      twitter: "https://twitter.com/rohitverma"
      // image: "https://example.com/image-rohit.jpg"
    }
  ];
  
  return (
    <div className="bg-gray-200 p-6 h-auto xl:h-screen">
      <div className="text-4xl font-semibold text-center mt-3 mb-3">
        {/* heading */}
        Meet our Team
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {
          profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              image={profile.image}
              name={profile.name}
              title={profile.title}
              desc={profile.desc}
              github={profile.github}
              insta={profile.instagram}
              twitter={profile.twitter}
            />
          ))
        }
      </div>
      <div className="text-center text-sm text-slate-600 mt-9">
        {/* footer */}
        Developed by <span className="underline font-semibold">Prathamesh</span>
      </div>
    </div>
  );
}

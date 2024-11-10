import React from "react";
import team1 from '/Images/team1.jpg';
import team2 from '/Images/team2.jpg';
import team3 from '/Images/team3.jpg';
import team4 from '/Images/team4.jpg';
import placeholderImage from '/Images/placeholder.jpg'; // Ensure you have a placeholder image in the specified path

const SageTeam = () => {
  return (
    <div className="sage-team-container p-8 bg-white text-black">
      <h2 className="text-[70pt] font-[Sansation-Bold] text-center mb-8 text-orange-400">SAGE TEAM</h2>

      {/* Executive Board */}
      <div className="team-section">
        <h3 className="text-[50pt] font-[Sansation-Bold] mb-4 text-center text-blue-500">Executive Board</h3>
        <div className="flex flex-wrap justify-center gap-16">
          {[
            { name: "Dr. Prasad Shastry", title: "CEO", image: team1 },
            { name: "Dr. M.H. Kori", title: "CTO", image: team2 },
            { name: "Ms. Scarlet Daoud", title: "COO", image: team3 },
            { name: "Ms. Aparna Sankarasubram", title: "CFO", image: team4 },
          ].map((member, index) => (
            <div key={index} className="card bg-blue-900 text-white w-64 shadow-lg flex flex-col items-center p-4 rounded-xl">
              <img src={member.image || placeholderImage} alt={member.name} className="w-32 h-32 rounded-full" />
              <div className="text-center mt-4">
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-lg">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advisory Board */}
      <div className="team-section mt-16">
        <h3 className="text-[50pt] font-[Sansation-Bold] mb-4 text-center text-blue-500">Advisory Board</h3>
        <div className="flex flex-wrap justify-center gap-16">
          {[
            { name: "Dr. Surendra Pal", title: "Advisor", image: "" },
            { name: "Prof. V. Mahadevan", title: "Advisor", image: "" },
            { name: "Dr. Raghavan", title: "Advisor", image: "" },
          ].map((member, index) => (
            <div key={index} className="card bg-blue-900 text-white w-64 shadow-lg flex flex-col items-center p-4 rounded-xl">
              <img src={member.image || placeholderImage} alt={member.name} className="w-32 h-32 rounded-full" />
              <div className="text-center mt-4">
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-lg">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Associates */}
      <div className="team-section mt-16">
        <h3 className="text-[50pt] font-[Sansation-Bold] mb-4 text-center text-blue-500">Associates</h3>
        <div className="flex flex-wrap justify-center gap-16">
          {[
            { name: "Mr. Bala Sundaram", title: "Associate", image: "" },
            { name: "Mr. Krishna Katragadda", title: "Associate", image: "" },
            { name: "Mr. Srinivas Ponnala", title: "Associate", image: "" },
            { name: "Mr. Sasidhar Vajha", title: "Associate", image: "" },
            { name: "Dr. I. Rosaline", title: "Associate", image: "" },
            { name: "Dr. G. Boopalan", title: "Associate", image: "" },
            { name: "Dr. Swetha Amit", title: "Associate", image: "" },
            { name: "Ms. Gayetri Ranjeri", title: "Associate", image: "" },
            { name: "Mr. Neelakantan", title: "Associate", image: "" },
            { name: "Prof. C. Murali", title: "Associate", image: "" },
            { name: "Dr. Parimala Prabhakar", title: "Associate", image: "" },
            { name: "Dr. Sanjay Moghe", title: "Associate", image: "" },
            { name: "Dr. YoungSoo Kim", title: "Associate", image: "" },
            { name: "Mr. James O’Donnell", title: "Associate", image: "" },
            { name: "Mr. Nicholas Manos", title: "Associate", image: "" },
            { name: "Ms. Hemalatha Nagaraj", title: "Associate", image: "" },
            { name: "Prof. S. L. Nisha", title: "Associate", image: "" },
          ].map((member, index) => (
            <div key={index} className="card bg-blue-900 text-white w-64 shadow-lg flex flex-col items-center p-4 rounded-xl">
              <img src={member.image || placeholderImage} alt={member.name} className="w-32 h-32 rounded-full" />
              <div className="text-center mt-4">
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-lg">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Graphics Design and Artwork */}
      <div className="team-section mt-16">
        <h3 className="text-[50pt] font-[Sansation-Bold] mb-4 text-center text-blue-500">Graphics Design and Artwork</h3>
        <div className="flex flex-wrap justify-center gap-16">
          {[
            { name: "Mr. Aidan Conklin", title: "Designer", image: "" },
          ].map((member, index) => (
            <div key={index} className="card bg-blue-900 text-white w-64 shadow-lg flex flex-col items-center p-4 rounded-xl">
              <img src={member.image || placeholderImage} alt={member.name} className="w-32 h-32 rounded-full" />
              <div className="text-center mt-4">
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-lg">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IT/Website Advisors */}
      <div className="team-section mt-16">
        <h3 className="text-[50pt] font-[Sansation-Bold] mb-4 text-center text-blue-500">IT/Website Advisors</h3>
        <div className="flex flex-wrap justify-center gap-16">
          {[
            { name: "Dr. Tejas Shastry", title: "IT/Website Advisor", image: "" },
            { name: "Mr. Pumichat Raksaphaeng", title: "IT/Website Advisor", image: "" },
          ].map((member, index) => (
            <div key={index} className="card bg-blue-900 text-white w-64 shadow-lg flex flex-col items-center p-4 rounded-xl">
              <img src={member.image || placeholderImage} alt={member.name} className="w-32 h-32 rounded-full" />
              <div className="text-center mt-4">
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-lg">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Advisor */}
      <div className="team-section mt-16">
        <h3 className="text-[50pt] font-[Sansation-Bold] mb-4 text-center text-blue-500">Social Media Advisor</h3>
        <div className="flex flex-wrap justify-center gap-16">
          {[
            { name: "Ms. Manmeet Kaur", title: "Social Media Advisor", image: "" },
          ].map((member, index) => (
            <div key={index} className="card bg-blue-900 text-white w-64 shadow-lg flex flex-col items-center p-4 rounded-xl">
              <img src={member.image || placeholderImage} alt={member.name} className="w-32 h-32 rounded-full" />
              <div className="text-center mt-4">
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-lg">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SageTeam;

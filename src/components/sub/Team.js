import Layout from "./Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { path } from "../../asset/api";

function Team() {
  const [Members, setMembers] = useState([]);
  const depthTwo = [
    { name: "About Us", path: `/about` },
    { name: "Our Team", path: `/about/team` },
  ];
  useEffect(() => {
    axios.get(`${path}/DB/members.json`).then((json) => {
      setMembers(json.data.members);
    });
  }, []);

  return (
    <Layout name={"Team"} title={"Our Team"} depthTwo={depthTwo}>
      <div className="wrap">
        {Members.map((member, idx) => {
          return (
            <article key={idx}>
              <div className="inner">
                <div className="pic">
                  <img src={`${path}/img/${member.pic}`} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Layout>
  );
}

export default Team;

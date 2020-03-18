import React from "react";
import { multipleParagraphs, MyHighlight } from "../../../helpers";

const AboutUs = () => {
  const renderPrinciples = () => {
    const principles = [
      {
        title: "RADICAL INCLUSION",
        body:
          "We welcome and respect the stranger. No prerequisites exist for participation in our community."
      },
      {
        title: "GIFTING",
        body:
          `We are devoted to acts of gift giving. The value of a gift is unconditional. Gifting does not contemplate a return or an exchange for something of equal value.`
      },
      {
        title: "DECOMMODIFICATION",
        body:
          "Our community seeks to create social environments that are unmediated by commercial sponsorships, transactions, or advertising. We resist the substitution of consumption for participatory experience."
      },
      {
        title: "RADICAL SELF-RELIANCE",
        body:
          "We encourage the individual to discover, exercise and rely on his or her inner resources."
      },
      {
        title: "RADICAL SELF-EXPRESSION",
        body:
          "Radical self-expression arises from the unique gifts of the individual. No one other than the individual or a collaborating group can determine its content."
      },
      {
        title: "COMMUNAL EFFORT",
        body: "Our community values creative cooperation and collaboration."
      },
      {
        title: "CIVIC RESPONSIBILITY",
        body:
          "Community members who organize events should assume responsibility for public welfare and endeavor to communicate civic responsibilities to participants."
      },
      {
        title: "LEAVING NO TRACE",
        body:
          "Our community respects the environment. We are committed to leaving no physical trace of our activities wherever we gather. We clean up after ourselves and endeavor, whenever possible, to leave such places in a better state than when we found them."
      },
      {
        title: "PARTICIPATION",
        body:
          "Our community is committed to a radically participatory ethic. We achieve being through doing. Everyone is invited to work. Everyone is invited to play."
      },
      {
        title: "IMMEDIACY",
        body:
          "Immediate experience is the most important touchstone of value in our culture. No idea can substitute for this experience."
      }
    ];

    return principles.map(principle => {
      return (
        <div key={principle.title}>
          <h3>{principle.title}</h3>
          <MyHighlight
            body={principle.body}
            items={[""]}
            style="paragraph centered-text"
          />
        </div>
      );
    });
  };

  return (
    <div className="about">
      <div className="small-margin-bottom">
        <h2>Who we are</h2>
      </div>
      {multipleParagraphs(
        [
          {
            body:
              "Frothin’ Weirdos formed from an incredible group of international frothers enticed by the weird, wacky and wonderful allure of the cultural party experience of Burning Man. What started as a simple curiosity for many has grown into an annual exploration of new experiences, memories and friendships",
            items: [""]
          },
          {
            body:
              "Frothin’ Weirdos  was born in 2016 when some members of 3 disbanded camps came together to start something special. The camp was small, and the conditioners were rough, but they all had 2 things in common: they were weird, and they were frothin’! Little did they know that their tiny camp built of a tarp and a broomstick would plant the Frothin’ Weirdos seed that continues to grow year after year.",
            items: ["frothin’!"]
          },
          {
            body:
              "We come from all over, and all are welcome. We’re from Australia to Scotland, Israel to America and everywhere else in between. And once a year we return home to Black Rock City to reunite with our friendly frother family and share our weirdness with the Burning Man community. We come without expectation, without opinion and without judgement. We come ready and open to experience all that the playa provides, with the intention to create, explore, build and give back.",
            items: [""]
          },
          {
            body:
              "But you don’t have to go to Burning Man to be a Frothin’ Weirdo! A trip to the playa doesn’t appeal to everyone, and to each their own. Above all else, we come together through a collective love for good times, good challenges and good people. So regardless of where we are, on playa or not, our mission, principles and values remain the same.",
            items: [""]
          }
        ],
        "paragraph centered-text"
      )}

      <img src="../../../imgs/what_our_mission_is.jpg" className="banner" />

      <div className="small-margin-top">
        <h2>What our mission is</h2>
      </div>

      {multipleParagraphs(
        [
          {
            body:
              "To bring together legendary, fun, like-minded people and create an ever-growing connected family with a permanent placement on the playa. To connect and build frothin’ friendships that last a lifetime, or at the very least to make mates to party with all over the world.",
            items: [""]
          },
          {
            body:
              "To create a welcoming and memorable space for all to come experience and enjoy. Our lively events provide “Eats & Beats” to give back to the biggest adult playground in the world. To be known on the playa for our friendly frothin’ faces, wild weirdness and memorable madness.",
            items: [""]
          },
          {
            body:
              "To achieve a sustainable approach to all aspects of camp operations from preparation, partying, set up and pack down. We want to maximize opportunities to recycle, reduce and reuse to minimize our waste footprint and achieve a consistent stellar green MOOP score.",
            items: [""]
          }
        ],
        "big-numbered-list centered-text"
      )}

      <div className="small-margin-top small-margin-bottom">
        <MyHighlight
          body="We’ll open up camp registration to new members in April, after we have a headcount on returning campers. We limit camp to about 100 people to make sure we create a strong sense of community."
          items={[""]}
          style="paragraph bold-700 centered-text quote"
        />
      </div>

      <img src="../../../imgs/who_we_are_2.jpg" className="banner" />

      <div className="small-margin-top small-margin-bottom">
        <h2>Why we do this</h2>
      </div>

      {multipleParagraphs(
        [
          {
            body:
              "Each year gives us a new opportunity to grow and continue to give back to the Burning Man community that took us in. We take the learnings from years past and endeavor to improve wherever we can. Our events get bigger, bolder and better. Our crew gets more organised, connected and resourceful.",
            items: [""]
          },
          {
            body:
              "We do this so we can connect with more people, provide burners with memorable experiences and bring our vibrant visions to life. We do it all for the wild, wacky and weird week in the desert at the end of every August. We do this so we can bring the principles of Burning Man back to the default world and share them with others through events we put on throughout the year. And we do this for fun.",
            items: [""]
          },
          {
            body:
              "Since Burning Man is where we first came together, we truly believe embodying and passing on the 10 principles that co-founder Larry Harvey wrote in 2004 and implementing them into all of our events.",
            items: [""]
          }
        ],
        "paragraph centered-text"
      )}

      <div className="bold-900 quote centered-text medium-margin-top small-margin-bottom">
        “They were crafted not as a dictate of how people should be and act, but
        as a reflection of the community’s ethos and culture as it had
        organically developed since the event’s inception.”
      </div>

      <img src="../../../imgs/why_we_do_this.jpg" className="banner" />

      {renderPrinciples()}

      <img src="../../../imgs/who_we_are_1.jpg" className="banner" />
    </div>
  );
};

export default AboutUs;

import React, { useContext } from "react";
import Popup from "reactjs-popup";

import { AuthContext } from "../../../../providers/Auth";

import BoxedButton from "../../../formComponents/boxedButton";
import { MyHighlight, multipleParagraphs } from "../../../../helpers";

const CampWithUs = () => {
  const { currentUserProfile } = useContext(AuthContext);

  return (
    <div className="camp-with-us">
      <div className="small-margin-bottom">
        <h2>Thank You For Your Interest in Camping with Frothin’ Weirdos!</h2>

        <MyHighlight
          body="Our camp is made up of an incredible crew of international frothers that
        come together to bring our vision to life. Doing this requires a
        significant amount of time, effort and challenge but it is also an
        extremely rewarding experience, and a whole lot of fun."
          items={[""]}
          style="paragraph centered-text"
        />
      </div>

      <img
        src="../../../../imgs/camp_with_us.jpg"
        className="banner small-margin-bottom"
      />

      <div className="medium-margin-bottom">
        <h2>What Our Mission is</h2>

        {multipleParagraphs(
          [
            {
              body:
                "To bring together legendary, fun, like-minded people and create an ever-growing connected family with a permanent placement on the playa. To connect and build frothin’ friendships that last a lifetime, or at the very least to make mates to party with all over the world.",
              items: [""]
            },
            {
              body:
                "To create a welcoming and memorable space for all to come experience and enjoy. Our lively events provide “Eats &amp; Beats” to give back to the biggest adult playground in the world. To be known on the playa for our friendly frothin’ faces, wild weirdness and memorable madness.",
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
      </div>

      <div className="medium-margin-bottom">
        <h2>As a Member of Our Camp, You’ll Have Access to</h2>
        <div className="li li-unstyled centered-text">
          Camp member only shaded chill area.
        </div>
        <div className="li li-unstyled centered-text">
          Comfortable cuddle puddles.
        </div>
        <div className="li li-unstyled centered-text">
          Communal kitchen area for cooking &amp; cleaning.
        </div>
        <div className="li li-unstyled centered-text">
          Golden shower and grey water tank.
        </div>
        <div className="li li-unstyled centered-text">
          Access to alcohol from the bar during events.
        </div>
      </div>

      <div className="medium-margin-bottom">
        <h2>To Join Our Camp, We Have Several Requirements</h2>

        {multipleParagraphs(
          [
            {
              body:
                "A personal reference from a past or current camp member – your attitude and behavior at the camp will be a reflection of both you and your personal reference person. Your behaviour is also a reflection of the Frothin’ Weirdos and being part of our camp means properly reflecting our values and upholding our reputation, not ruining it. Distasteful behaviour will result in your attendance at future events to be reconsidered.",
              items: [""]
            },
            {
              body:
                "Several shifts to support the camp – it takes all hands-on deck to bring our events to life. Nothing feels like work when you’re having fun! You’ll be assigned to a Team Leader who will let you know what your specific jobs are and when you’re required to be working. The rostered shifts are not very long and will be shared amongst the entire camp. Deposits will not be returned to anyone who skips out on a scheduled shift and attendance at future events will be reconsidered. We all go to Burning Man for the fun experience, not to cover other people’s shifts so do whatever you need to do to show up on time. Performance during your shift will also be taken into consideration because it’s so important to us that we provide an interactive atmosphere and environment to anyone who drops by. Remember, being present and donating your time at the camp is a great way to gift to Burning Man and its participants.",
              items: [""]
            },
            {
              body:
                "Available to help with camp set up and pack down on – this may include early entry for camp build on the first Friday depending on the availability of early entry tickets or staying until final MOOP sweeps are complete on the last Tuesday. Deposits will not be returned to anyone who skips out on set-up and/or pack down.",
              items: [""]
            },
            {
              body:
                "Immediate payment of camp dues – do not apply for the camp if you cannot immediately pay your camp dues. Your application is not complete until dues are received in full. Camp dues are required upfront in order to purchase important camp items and eliminates the need for us having to annoyingly chase you down for payment. The breakdown of the camp dues is always shared with the whole camp so everyone can see where their money is being spent. If you’re a returning camper, your reapplication needs to be in by April so we can open up any remaining spots to new camper applications. In previous years these spots have filled up very quickly.",
              items: [""]
            },
            {
              body:
                "Commitment to Burning Man’s LEAVE NO TRACE Principle – you must keep your personal area clean of MOOP, and also pitch in as required to keep our communal areas in tip-top shape. Our MOOP score has been stellar in years past and we need to keep it this way to ensure epic placement for years to come. You will not leave behind any camping equipment or general rubbish/trash/shit for your fellow camp mates to clean up. Leaving No Trace is a key camp focus and should also be a personal goal for you too. Any nonadherence to this principle will results in your deposit not being returned and attendance at future events will be reconsidered.",
              items: ["Burning Man’s"]
            },
            {
              body:
                "You must check-in on arrival and check-out before departure – When you get to camp, you’ll be shown to your designated parking and camping area and must check in with your assigned Team Leader. Upon departure, you must inform your Team Leader to ensure all your tasks are complete and you’re good to go. Your bike must not be left behind, and you’ll be required to take some allocation of camp trash or recycling with you to dispose of properly in the default world. Deposits will not be returned to anyone who skips out early or leaves their bike behind.",
              items: [""]
            },
            {
              body:
                "Respect for yourself and others – we have zero tolerance for drama, discrimination, sexual misconduct, or violence. In the event that you cause any of this to occur, you’ll be asked to leave our camp and/or events immediately. Be respectful and be accountable. We’re all coming for a good time and nobody wants to come to Burning Man to deal with fuckwits. Simple solution – don’t be one. Look after yourself and look out for everyone else. Burning Man works the way it does because everybody is responsible for their own decisions and actions.",
              items: [""]
            },
            {
              body:
                "Adhere to de-commodification – do not join our camp for a cool photoshoot backdrop to promote anything on your Instagram account, or as a place to sell your products on the playa. This violates the very principles of Burning Man. Join our camp if you want to be around a mad crew of fun people looking to pitch in, give back and have an experience of a lifetime.",
              items: [""]
            },
            {
              body:
                "You MUST be over 21 – we run a bar on need to comply with Nevada liquor laws.",
              items: [
                "You MUST be over 21 – we run a bar on need to comply with Nevada liquor laws."
              ]
            }
          ],
          "big-numbered-list centered-text"
        )}
      </div>

      {multipleParagraphs(
        [
          {
            body:
              "Our expectations are in no way unrealistic or unachievable, nor are they rules – they’re responsibilities. Please take them seriously, because we do. If for any reason you can’t meet them while you’re on the playa or have any questions, speak directly with your Team Leader.",
            items: [""]
          },
          {
            body:
              "We want to get all the serious talk out of the way now so that when we’re there we can focus on the fun stuff. You’ll quickly find that managing these responsibilities and having a good time is not a hard task. Just be a good human. If building, interacting, contributing and having a shit ton of fun is what you’re into then we’d be thrilled to have you. Please submit your application below by filling out all sections.",
            items: [""]
          }
        ],
        "paragraph centered-text"
      )}

      {!!currentUserProfile ? (
        <a className="medium-margin-top centered" href="#application">
          <BoxedButton text="Apply" />
        </a>
      ) : (

        <a className="medium-margin-top centered" href="#sign-up">
          <BoxedButton text="Apply" />
        </a>

        // <div className="centered flex-group">
        //   <Popup
        //     trigger={<button className="boxed-button">Apply</button>}
        //     position="right center"
        //   >
        //     <div>Please create an account to apply</div>
        //   </Popup>
        // </div>
      )}

      <div className="small-margin-top">
        <MyHighlight
          body="We’ll open up camp registration to new members in April, after we have a headcount on returning campers. We limit camp to about 100 people to make sure we create a strong sense of community."
          items={[""]}
          style="paragraph bold-700 centered-text"
        />
      </div>
    </div>
  );
};

export default CampWithUs;

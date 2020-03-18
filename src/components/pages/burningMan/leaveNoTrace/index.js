import React from "react";
import { Link } from "react-router-dom";

import { MyHighlight, multipleParagraphs } from "../../../../helpers";
import BoxedButton from "../../../formComponents/boxedButton";

const TipsAndTricks = () => {
  return (
    <div className="leave-no-trace">
      <div className="paragraph centered-text quote quote__content small-margin-bottom medium-margin-top">
        <div className="small-margin-bottom">
          “Our community respects the environment. We are committed to leaving
          no physical trace of our activities wherever we gather. We clean up
          after ourselves and endeavor, whenever possible, to leave such places
          in a better state than when we found them.”
        </div>
        <MyHighlight
          body="Larry Harvey, Co-Founder of Burning Man"
          items={[]}
          style="paragraph centered-text quote"
        />
      </div>

      <img src="../../../../imgs/leave_no_trace.jpg" className="banner" />

      <div className="medium-margin-bottom small-margin-top">
        {multipleParagraphs(
          [
            {
              body:
                "LEAVE NO TRACE (LNT) is the responsibility of every single citizen of Black Rock City and it’s a massive expectation of our camp. The Black Rock Desert is a place like no other and each year we get the privilege of visiting this place, on the condition that we keep it pristine and protect it. Burning Man is the largest LEAVE NO TRACE (LNT) event in the world, where every person is responsible for themselves.",
              items: []
            },
            {
              body:
                "Our incredible camp placement at 9:30 &amp; A in 2019 was dependent on the stellar clean up job done in 2018. And the clean-up job we did in 2019 will help determine where we’re placed in 2020. After we unwillingly disappear back into the default world, Burning Man painstakingly rolls through the camps and scrutinizes them for MOOP, grading us for next year.",
              items: ["9:30 & A"]
            },
            {
              body: "What is MOOP you ask? MOOP = Matter Out of Place",
              items: ["MOOP = Matter Out of Place"]
            },
            {
              body:
                "In other words, this means any shit that’s not supposed to be there. During the event this includes anything on the ground that has been discarded accidentally or intentionally. At the end of the event, it includes absolutely anything and everything that wasn’t there before we were. Only the dust remains.",
              items: ["any shit that’s not supposed to be there."]
            },
            {
              body:
                "It’s super important you fully understand the expectations of our camp, as well as the expectations of you as an individual. We’ll go through some things to keep in mind to help you plan ahead, reduce our waste as a camp, as well as how we plan to implement and execute more sustainable practices.",
              items: []
            }
          ],
          "paragraph centered-text"
        )}
      </div>

      <div className="medium-margin-bottom">
        <h2>Getting There</h2>
        <MyHighlight
          body="The reason Burning Man only gives out a certain amount of vehicle passes
        is to make sure they limit the number of cars coming in and out.
        Carpooling is cool! If you have a spare seat in your car on the way in,
        consider picking up a hitchhiker. Got a Burner Bus Ticket? Thanks for
        doing your part."
          items={[""]}
          style="paragraph centered-text"
        />
      </div>

      <div className="medium-margin-bottom">
        <h2>Water/Grey Water</h2>

        {multipleParagraphs(
          [
            {
              body:
                "Water of any kind CANNOT be dumped on the playa as it will just turn the place into a mud puddle. There will be a grey water tank on-site for disposal of ‘scuzzy’ water from the kitchen and other non- reusable water such as meat-contaminated esky/cooler water and grimy teeth brushing, shower water.",
              items: [""]
            },
            {
              body:
                "BUT, clean waste water from melted ice or dry ice can be used for cleaning, showering and keeping the dust down. Our recommendation to make use of this type of water is to take an empty gallon jug and poke a bunch of tiny holes in the lid. Fill it with the clean-ish, reusable waste water and sprinkle (not dump) the water onto dusty areas at the camp so it can be evaporated into the beautiful playa sky.",
              items: ["BUT"]
            }
          ],
          "paragraph centered-text"
        )}
      </div>

      <div className="medium-margin-bottom">
        <h2>Food</h2>

        {multipleParagraphs(
          [
            {
              body:
                "Food will be the responsibility of each camper. We want to encourage you to take more than 2 seconds to think when it comes to meal planning. It’s very easy to just grab a ton of packaged food to go, but if you’re in a position to do so, it’s way better to buy in bigger sizes and share with a few fellow campers. This will help reduce some of our packaging waste. Everything that comes in needs to be brought out. Cardboard packaging is recyclable, so a better choice than plastic, if possible. The less waste, the better.",
              items: ["Food will be the responsibility of each camper."]
            },
            {
              body:
                "Our camp kitchen will be equipped with tables, cookers, gas, utensils and trash/recycling/compost bins. Our equipment is limited to the basics so BYO plates, cups, cutlery, and something to wash up with.",
              items: ["BYO plates, cups, cutlery,"]
            }
          ],
          "paragraph centered-text"
        )}
      </div>

      <div className="medium-margin-bottom">
        <h2>Booze</h2>
        <MyHighlight
          body="If beer is your thang, get CANS! Also try to get all other booze in cans
        or plastic bottles if possible. We can recycle cans on the playa at the
        Recycle Camp at Center Camp, but not glass, and glass is heavy."
          items={["get CANS"]}
          style="paragraph centered-text"
        />
      </div>

      <div className="medium-margin-bottom">
        <h2>Tents / Esky / Coolers / Mattress</h2>

        {multipleParagraphs(
          [
            {
              body:
                "If a tent is your home for the week, and especially if you’re from overseas, think ahead and buy a decent one that you can use again for years to come. Although cheap ones can be less expensive, throwing one away after a week of use isn’t great for the environment. The same goes for eskies/coolers and air mattresses. An even better option is to bring your own, or find them on Craiglist/Gum Tree etc. Pop-up Coleman tents are the go – they’re the best and will last you at least 6 burns, if not more.",
              items: [""]
            },
            {
              body:
                "Anything you push into the ground like tent stakes need to be accounted for as well so please be super conscious of this. Finding shit stuck in the ground during the final MOOP sweep is super annoying.",
              items: [""]
            },
            {
              body:
                "Frothin’ Weirdo’s Storage Unit is in Reno and contains a wide variety of camp supplies from burners who can’t attend this year and will be available for re-use. Closer to the burn we’ll advise on what’s available in terms of tents, blankets, bikes etc. that may be able to be re-used before you go shopping.",
              items: ["Frothin’ Weirdo’s Storage Unit"]
            }
          ],
          "paragraph centered-text"
        )}
      </div>

      <div className="medium-margin-bottom">
        <h2>Toilets</h2>
        <MyHighlight
          body="Porta-Potties! Pissing and shitting on the playa is forbidden so please
        don’t be that shit cunt. If it wasn’t in your body, don’t put it in the
        potty! Only toilet paper and human waste in the potties. Anything else —
        tampons, trash, baby wipes — will clog the cleaning hose, resulting
        backed up potties."
          items={["Pissing and shitting on the playa is forbidden"]}
          style="paragraph centered-text"
        />
      </div>

      <div className="medium-margin-bottom">
        <h2>Trash</h2>

        {multipleParagraphs(
          [
            {
              body:
                "Littering is for losers. There will be trash/recycling/compost bins located in the kitchen and around the camp. It’s super important to pay attention and put our trash into the appropriate bins. We’ll have different bins for cans/tins, glass (for those who don’t listen), plastic, rubbish and compost waste.",
              items: ["Littering is for losers."]
            },
            {
              body:
                "Make sure to add trash bags to your shopping list to collect trash around your tent/van/RV. It’s also a super smart idea to carry a MOOP bag with you so you can pick up random stuff along the way. Don’t hesitate if you see MOOP. A second later if can be hidden again in the dust never to be seen again.",
              items: [""]
            }
          ],
          "paragraph centered-text"
        )}
      </div>

      <div className="medium-margin-bottom">
        <h2>Cigarettes</h2>
        <MyHighlight
          body="Cigarette butts count as trash so chucking them on the ground is
        littering. This also applies to cigarette ash. Yes, you read that right.
        We recommend carrying a little tin container to collect your butts and
        ash. There will be mini bins located around the camp for cigarette ash
        and butt disposal as well. If you see someone not adhering to this, call
        them up! This behaviour is NOT what’s we’re all about."
          items={["Cigarette butts count as trash"]}
          style="paragraph centered-text"
        />
      </div>

      <div className="medium-margin-bottom">
        <h2>Recycling</h2>
        <MyHighlight
          body=" We’ll have a can crusher on hand to reduce the size of the tins (a
        sturdy boot stomp does trick too) so we can easily bring them to the
        Recycling Camp at Center Camp. Plastic bottles should also be crushed as
        much as possible to reduce the size of the waste that needs to be
        brought out and dealt with."
          items={["Recycling Camp at Center Camp."]}
          style="paragraph centered-text"
        />
      </div>

      <div className="medium-margin-bottom">
        <h2>Food Waste / Composting</h2>

        <MyHighlight
          body="This is the second year we’ll be working with a composting program. Our
        camp has been registered to be able to bring our food waste to a
        specific camp site to be dealt with. There’ll be a sign posted above the
        compost bucket that will be very specific about what can go in it. It’s
        very important that food waste is dealt with properly. Some people think
        that food waste is fine on the ground because it’s natural and will
        decompose. WRONG! It’s an alkaline desert and NOTHING decomposes. We
        mean nothing."
          items={["WRONG!"]}
          style="paragraph centered-text"
        />
      </div>

      <div className="medium-margin-bottom">
        <h2>Other Shit Worth Noting</h2>

        {multipleParagraphs(
          [
            {
              body:
                "MOOP Sweeps – This is a mandatory, scheduled activity that you’ll need to participate in as a member of the Frothin’ Weirdos Camp. MOOP teams will be assigned every day to sweep the camp for MOOP and pick it up so we stay on top of the MOOP situation and not leave it all ‘til the end. MOOP rakes will be available to rake the dusty playa floor to uncover hidden MOOP treasures for collection.",
              items: ["MOOP Sweeps", "Frothin’ Weirdos Camp."]
            },
            {
              body:
                "Bikes – If you have a bike, it’s your responsibility. Leaving it somewhere on the playa for someone else to deal with is a shit house thing to do, so just don’t do it. Each year thousands of bikes need to be retrieved and dealt with. If your bike breaks during the week, it can be fixed at bike shops around the camping area. At the end of the burn, if your bike isn’t in good enough condition to use again and go into the storage unit, donate it to places that accept bike donations on the way out of the burn.",
              items: ["Bikes – If you have a bike, it’s your responsibility."]
            },
            {
              body:
                "Glitter/Tassels – Glitter gets everywhere and when it does, it’s a nightmare to clean up. There are types of glitter that decompose but out on the playa this doesn’t apply because nothing decomposes out there. Avoid glitter altogether. This include glittery makeup as well as glittery clothing. The same goes for tassels and tinsel. The little strands get everywhere and are a huge pain in the ass to pick up.",
              items: ["Glitter/Tassels"]
            },
            {
              body:
                "Other Things to Leave at Home – feathers, sequins, beads, fake eyelashes, Astroturf, unsecure clothing and bike decorations, hay bales, straw, gravel, plants — or anything else that can blow away.",
              items: ["Other Things to Leave at Home"]
            },
            {
              body:
                "The Natural Environment – Do not bring animals or plants; they will suffer and possible die out there. Do not take any artifacts that you may find on your travels. Artifacts should be turned into the Lost and Found in Center Camp with an EXACT location of where it was discovered. Do not interfere with any natural wildlife you come across, although you’ll notice there is very little.",
              items: ["The Natural Environment"]
            }
          ],
          "paragraph centered-text"
        )}
      </div>

      <div className="medium-margin-bottom">
        <h2>Exodus – Leave Nevada Beautiful</h2>

        {multipleParagraphs(
          [
            {
              body:
                "Exiting the burn is just as important as entering. It’s been a long week and we’re all going to be tired and dying to get to a hotel room to shower. But it’s so important to finish the job all the way to the end, and that means disposal of trash, recycling, grey water and stuff that needs to go into the storage unit.",
              items: ["Exiting the burn is just as important as entering."]
            },
            {
              body:
                "On the way out there are a tons of spots to dispose of trash bags for a small fee to the local community. Chucking your trash bags on the side of the road is unthinkable so don’t even think about it. Seeing bags of trash on the side of the road is a really disheartening sight after such an incredible week, so please don’t contribute to that. Make sure all trash bags are secured tightly if they’re going on top of a car or van to make sure you don’t fall off unknowingly and spray trash everywhere.",
              items: [
                "Chucking your trash bags on the side of the road is unthinkable so don’t even think about it."
              ]
            },
            {
              body:
                "The cleanliness and maintenance of the roads going in and out of Burning Man are a critical piece that allows Burning Man to keep using this location. Do your part and call out those who don’t.",
              items: ["Do your part and call out those who don’t."]
            },
            {
              body:
                "Although we will have a grey water tank on-site that will be drained and removed at the end of the burn, if it gets full, we’ll need to bring our grey water out in containers. These can be dumped in toilets and sewage drains/gutters on the road, so the water goes where it needs to.",
              items: [""]
            }
          ],
          "paragraph centered-text"
        )}
      </div>

      <div className="medium-margin-bottom">
        <h2>Consequences</h2>

        {multipleParagraphs(
          [
            {
              body:
                "Money – If you can’t stay after the burn to help clean up, the $500 deposit fee you paid with your camp dues will not be returned. That money will go into the camp fund for next year and will pay for a dinner for all the people that stayed behind to clean.",
              items: ["Money – "]
            },
            {
              body:
                "Social Shunning – Burners tend to hold the 10 Burning Man Principles close to their hearts, especially Leave No Trace. MOOPing, pissing on the playa, and any other non-environmentally friendly activities are socially unacceptable, and you’ll face social ostracism as a result.",
              items: ["Social Shunning –"]
            },
            {
              body:
                "Banishment – If your behaviour in any way is inappropriate, violent, inconsiderate, discriminatory, or just non-Burning Man-like, you’ll be warned throughout the week, or it could result in you not being invited back to the camp next year. If you were referred by a friend, your behaviour also reflects on them so keep that in mind. We will be strict.",
              items: ["Banishment –"]
            },
            {
              body:
                "Now let’s come together for a beautiful burn experience and leave the playa better than we found it.",
              items: [
                "Now let’s come together for a beautiful burn experience and leave the playa better than we found it."
              ]
            }
          ],
          "paragraph centered-text"
        )}

        <Link
          to="/burning-man/camp-with-us"
          className="centered"
          onClick={() => window.scrollTo(0, 0)}
        >
          <BoxedButton text="Camp with Us" />
        </Link>
      </div>
    </div>
  );
};

export default TipsAndTricks;

import React from "react";
import { Link } from "react-router-dom";

import { MyHighlight, multipleParagraphs } from "../../../../helpers";
import BoxedButton from "../../../formComponents/boxedButton";

const TipsAndTricks = () => {
  return (
    <div className="tips-and-tricks">
      <div className="small-margin-bottom">
        <div className="small-margin-bottom">
          <h2>Virgin Tips & Tricks for Ol' Dogs</h2>
        </div>

        {multipleParagraphs(
          [
            {
              body:
                "Whether you’re a dusty, crusty veteran or a \"I can't believe I'm finally going to Burning Man\" newbie, it’s super important to be as prepared as possible for the days in the dust so they don’t suck ass. Some of us have done this before, so learn from our mistakes and enjoy the free wisdom from fellow Frothers.",
              items: []
            },
            {
              body:
                "Preparation is key to surviving and thriving at Burning Man, so apart from reading this page and the newsletters we put out, we highly recommend you take a dive into this year’s Burning Man Survival Guide, which can be found posted in the Frothin’ Weirdos FB Page. Any questions you can’t find answers for, just ask! Now let’s get into it. It’s super important you know what we’ll have as a camp, so you’ll have a clearer indication of what you’ll need to bring and what will be provided.",
              items: ["Burning Man Survival Guide", "Frothin’ Weirdos FB Page."]
            }
          ],
          "paragraph centered-text"
        )}
      </div>

      <img src="../../../../imgs/tips_and_tricks.jpg" className="banner" />

      <div className="medium-margin-bottom medium-margin-top">
        <div className="small-margin-bottom">
          <h2>Getting There</h2>
        </div>

        {multipleParagraphs(
          [
            {
              body:
                "It’s on each of you to find your way to Black Rock City, onto the playa, and to our camp. Those with vehicle passes this will mean getting to Reno and driving to Gerlach and onto BRC. Those without, this will mean getting a lift in the similar direction.",
              items: []
            },
            {
              body:
                "As expected, cops will be out and looking for any reason to pull you over. This means speeding, erratic driving, littering, passing, parking on the side of the road to piss, loose items, broken taillights, and non- visible license plates. So get your shit together and don’t ruin your burn before it’s even started.",
              items: []
            },
            {
              body:
                "It’s also important to cover up any company branding with decals as this is a Decommodification event.",
              items: ["Decommodification"]
            },
            {
              body:
                "Burner Bus Tickets? Well your lift is sorted. Struggling for a lift in? Don’t sweat it. Just drop a line in the group chat, or make a post in some online forums such as Reddit. Even hitching in is a legitimate option.",
              items: []
            }
          ],
          "paragraph centered-text"
        )}
      </div>

      <div className="medium-margin-bottom">
        <h2>Tents & Sleeping</h2>

        {multipleParagraphs(
          [
            {
              body:
                "If you don’t have an RV, camper or van, your sleeping option is a tent – unless you prefer the playa floor. We’ll have a shaded tent structure where campers can erect their tents. Don’t buy a cheap tent; you need it to last the whole burn and beyond. Best bet is a Coleman pop-up tent that doesn’t have vents so it keeps the dust out. But be prepared for everything to get dusty anyway. And we mean EVERYTHING.",
              items: []
            },
            {
              body:
                "All vans, cars and RVs will have assigned spots within the camp allocate by Jesse so just do whatever the fuck he tells you.",
              items: []
            }
          ],
          "paragraph centered-text"
        )}
      </div>

      <div className="medium-margin-bottom">
        <h2>Water/Grey Water</h2>
        {multipleParagraphs(
          [
            {
              body:
                "IMPORTANT! Water will NOT be provided by the camp. Make sure you bring enough clean water for yourself to stay hydrated for 8 hot days. We couldn’t stress this enough. We suggest at a minimum to allow for 3L per person, per day. A Camel Back comes in handy for those long mission to deep playa.",
              items: ["IMPORTANT!", "3L per person, per day."]
            },
            {
              body:
                "Water CANNOT be dumped on the playa as it will just turn the place into a mud puddle. There will be a camp grey water tank on-site for disposal of ‘scuzzy’ water from the kitchen and other non-reusable water such as meat-contaminated esky/cooler water and grimy teeth brushing water.",
              items: ["There will be a camp grey water tank on-site"]
            },
            {
              body:
                "Clean waste water from melted ice or dry ice can be used for cleaning, showering and keeping the dust down. Our recommended solution for this is to take an empty gallon jug and poke a bunch of tiny holes in the lid. Fill it with the clean-ish, reusable waste water and sprinkle the water onto dusty areas at the camp so it can be easily evaporated into the beautiful playa sky.",
              items: [""]
            }
          ],
          "paragraph centered-text"
        )}
      </div>

      <div className="medium-margin-bottom">
        <h2>Food</h2>
        <MyHighlight
          body="Food will be the responsibility of each camper. It may be easier to team
        up with another burner to cut costs and share cooking duties. It’s very
        important to think hard about what you’re bringing in as it gets very
        hot out there and iced coolers/eskies are our only way to keep food
        cold. Ice is available for purchase for $6 a bag at Center Camp, and
        you’ll need about 2 bags per day to keep an esky/cooler fresh, but it’s
        a bit of a mission and the line-up can be very long. BYO plates, cutlery
        and cups."
          items={["Food will be the responsibility of each camper."]}
          style="paragraph centered-text"
        />
      </div>

      <div className="medium-margin-bottom">
        <h2>Kitchen</h2>
        <MyHighlight
          body="Camp will have a kitchen tent, equipped with tables, cookers, gas,
        utensils and trash/recycling/compost bins. Our equipment is limited to
        the basics so BYO plates and cutlery, and something to wash up with."
          items={[""]}
          style="paragraph centered-text"
        />
      </div>

      <div className="medium-margin-bottom">
        <h2>Booze</h2>

        {multipleParagraphs(
          [
            {
              body:
                "If you want to drink something specific, buy it beforehand and bring it with you! If beer is your thang, get it in CANS! Also try to get all other booze in cans or plastic bottles if possible. We can recycle cans and plastic on the playa, but not glass. Glass is heavy and a fucking disaster if it breaks.",
              items: [
                "If you want to drink something specific, buy it beforehand and bring it with you!",
                "get it in CANS!"
              ]
            },
            {
              body:
                "The camp bar booze is available for you to drink while at camp and during camp events only. You’re NOT allowed to take bottles of booze from the bar with you on your adventures off-camp. So, if you want booze to take out with you, make sure you stock up from your own supply beforehand.",
              items: [
                "The camp bar booze is available for you to drink while at camp and during camp events only."
              ]
            },
            {
              body:
                "A lot of camps will serve alcohol at events to those with an ID and a reusable cup so hit up those events for some delicious free piss – you may find margaritas, champagne, ciders, mojitos and more!",
              items: [" "]
            },
            {
              body:
                "Bar Donations! As a camp will be giving back to the Burn through our events so we need all of you to get involved and make our parties as big as they can be. As a small token to this cause, we ask that all of our campers make a one-off Donation to our bar with either a bottle of booze or champagne! Or both!",
              items: ["Bar Donations!"]
            }
          ],
          "paragraph centered-text"
        )}
      </div>

      <div className="medium-margin-bottom">
        <h2>Shade</h2>
        <MyHighlight
          body="During the day our geo-domes and DJ tent will provide some respite from
        the sun. There’ll be plenty of camps around offering shaded cool spots
        so be sure to keep an eye out for them. Umbrellas are a mobile option
        for shade on the go and are also fancy AF! No one likes heat stroke."
          items={[
            "During the day our geo-domes and DJ tent will provide some respite from the sun."
          ]}
          style="paragraph centered-text"
        />
      </div>

      <div className="medium-margin-bottom">
        <h2>Showers</h2>
        <MyHighlight
          body="There’ll be a shower at camp to keep you filthy fuckers clean. However,
        with 110 people this cannot be treated as a daily luxury. Shower water
        is BYO! If you want a hassle-free shower be sure to go check out the
        Human Car Wash Camp and they’ll sort you out. Entry fee is a bit of
        friendly nudity. Hehehe."
          items={["Shower water is BYO!"]}
          style="paragraph centered-text"
        />
      </div>

      <div className="medium-margin-bottom">
        <h2>Toilets</h2>
        <MyHighlight
          body="Porta-Potties! Dotted around camp and out on the playa. Just look for
        the little fixed blue lights as these are the markers for toilet bays.
        The porta-potties are cleaned daily and usually stocked with Toilet
        Paper but we recommend bringing half a roll of 1 PLY TP with you
        wherever you go so you don’t get caught with your pants down. Pissing
        and shitting on the playa is forbidden so please don’t be that shit
        cunt."
          items={["Porta-Potties!"]}
          style="paragraph centered-text"
        />
      </div>

      <div className="medium-margin-bottom">
        <h2>Fire</h2>
        <MyHighlight
          body="Building your own fire at camp or anywhere else on they is strictly
        forbidden. If you’re cold, rug up with some extra layers. We’ll
        generally have a fire put going from sunset until around 10pm, and then
        it’ll fire back up again around 3 to 4am. Please don’t turn it on if you
        weren’t the one that brought it."
          items={[
            "Building your own fire at camp or anywhere else on they is strictly forbidden."
          ]}
          style="paragraph centered-text"
        />
      </div>

      <div className="medium-margin-bottom">
        <h2>Trash</h2>
        <MyHighlight
          body="LEAVE NO TRACE! One of the most important BM principles. It’s important
        to carefully consider all the supplies you bring into the burn.
        Littering is for losers. Bring a trash bag to collect your own trash as
        well. Everything that goes in has to come out in one form or another.
        More on this in the next newsletter."
          items={[""]}
          style="paragraph centered-text"
        />
      </div>

      <div className="medium-margin-bottom">
        <h2>Cigarettes</h2>
        <MyHighlight
          body="Cigarette butts count as trash so chucking them on the ground is
        littering and against what we stand for. We recommend carrying a little
        tin container in your fanny pack to collect your butts in along the way.
        If you see someone not adhering to this, call them up! This behaviour is
        NOT what’s we’re all about."
          items={[""]}
          style="paragraph centered-text"
        />
      </div>

      <div className="medium-margin-bottom">
        <h2>Gifting</h2>
        <MyHighlight
          body="Gifting is a big part of Burning Man culture but is in no way
        compulsory. If you’re feeling it, think of ways you can give back to all
        the beautiful people you meet without breaking the bank. Gifting can be
        anything from trinkets, to a laugh, a piece of clothing, your time, a
        conversation or even just a hug."
          items={["Gifting"]}
          style="paragraph centered-text"
        />
      </div>

      <div className="medium-margin-bottom">
        <h2>Things You'll Die Without</h2>
        {multipleParagraphs(
          [
            {
              body:
                "ID with your name, DOB and photo on it! Many camps will not serve you alcohol without it. A laminated photocopy (or 3) is sufficient and doesn’t matter if it gets lost or damaged.",
              items: ["ID"]
            },
            {
              body:
                "Cup/Mug/Goblet/Chalice/Drinking vessel,  as all camps serving alcohol require you to use your own cup. The fancier the better but NO GLASS! Disposable, 1-time use cups are a NO-GO – sustainability is cool!",
              items: ["Cup/Mug/Goblet/Chalice/Drinking vessel"]
            },

            {
              body:
                "Sunscreen/lip balm, as it gets sunny, hot and dry AF out there so take care of your skin and lips.",
              items: ["Sunscreen/lip balm"]
            },

            {
              body:
                "Dust mask and goggles to protect ya neck, face, eyes and lungs during the inevitable dust storms.",
              items: ["Dust mask and goggles"]
            },

            {
              body:
                "Biodegradable wet wipes are a great alternative to the daily shower. Good for a quick wipe off and refresh.",
              items: ["Biodegradable wet wipes"]
            },
            {
              body:
                "Warm clothes as it gets cold at night so make sure you have warm clothes. Some psychedelic leggings and a flashy fur coat is perfect for those late night/early morning dance parties and kick-ons. If you're still cold, going hard cutting shapes on the D-floor usually does the trick.",
              items: ["Sunscreen/lip balm"]
            },
            {
              body:
                "Blankets/ Sleeping bag. Same as above. If you want to sleep at night, you’ll want to be warm.",
              items: ["Blankets/ Sleeping bag."]
            },
            {
              body:
                "Mattress. If you’re in a tent or even a van make sure you have some padding to lying on. It will make sleeping a lot more comfortable and you will need to sleep eventually. Sleeping on the playa is brutal!",
              items: ["Mattress."]
            },
            {
              body:
                "Backpack/Satchel/Fanny Pack to carry all the essentials when you’re out and about day and night.",
              items: ["Backpack/Satchel/Fanny Pack"]
            },
            {
              body:
                "Bike. If it wasn’t already super obvious, bikes are essential. Avoid bikes with gears. Best set up is a fixed gear cruiser with 26” rims. Bigger tires are better, both in diameter and width. Geared bikes get really jammed up with the dust. There are bike fixing stations on playa but better not to need one.",
              items: ["Bike."]
            },
            {
              body:
                "Cushioning and padding for your seat are optional but will reduce chafe and make your ass a hell of a lot more comfortable. Extra lights, spray paint and miscellaneous decorations will make your bike stand out and be easier to find! It will also look amazing as you streak across the playa at night.",
              items: ["Cushioning and padding"]
            },
            {
              body:
                "Bike lock is super important! Locking your bike up will save you a lot of headache and potentially a lot of miles on foot. People are super friendly but at 6am when everyone is fucked, bikes (especially the pretty ones) have a tendency to go missing. Best not to get involved in the stolen bike economy.",
              items: ["Bike lock"]
            },
            {
              body:
                "Bike lights are very important! This is the only way people will see you at night. You can buy battery powered lights from Walmart which are cheap and will last the week. No lights = recipe for disaster.",
              items: ["Bike lights"]
            },

            {
              body:
                "Bike basket to hold all your shit! When the sun comes up you won’t want to wear your fur coat.",
              items: ["Bike basket"]
            },
            {
              body:
                "Tennis ball to go on the end of the kickstand on your bike! Absolutely necessary, trust us on this one.",
              items: ["Tennis ball"]
            },
            {
              body:
                "Spray bottle. Very handy to have. You can fill it with melted ice and spray yourself down when it gets too hot! Also good for a bit of dust suppression around camp and people love a good cold water misting. To combat the damaging effects of the dust, fill up a spray bottle with water and vinegar. The dust from the playa is brutally alkaline and it can tear your skin up and this will help clean you up and neutralize the alkalinity. Add some essential oils to your vinegar water so you don’t smell like a used douche!",
              items: ["Spray bottle."]
            },
            {
              body:
                "Torch/Head lamp. Light source for when the sun goes down. Pretty hard to locate shit in the dark!",
              items: ["Torch/Head lamp"]
            },
            {
              body:
                "Hand sanitizer is good to have on hand too. The playa is not a place you want to get sick! The have stations set up at the porta-potties but they always seem to be empty after the first few days.",
              items: ["Hand sanitizer"]
            },
            {
              body:
                "Camp Name & Address. Put it on anything valuable you plan to take out onto the playa with you. That way if you lose it there’s a chance it can find its way back to you. We’ve seen this save the day.",
              items: ["Camp Name & Address"]
            }
          ],
          "paragraph"
        )}
      </div>

      <div className="medium-margin-bottom">
        <h2>Other Shit Worth Noting</h2>

        {multipleParagraphs(
          [
            {
              body:
                "Op-Shops/Thrift Shops/Vintage Shops are a great way to get your fanciest, whackiest dress items and will save you spending heaps on overpriced outfits. If you’re flying into San Francisco, heading down to Haight Street for a look around is an absolute must. Check out the Frothin’ Weirdos event line up as there’re a few themed dress up parties to prepare for. Gold, tutus and penguin suits are required.",
              items: ["Op-Shops/Thrift Shops/Vintage Shops"]
            },
            {
              body:
                "Walmart is the one-stop-shop for the majority of your supplies heading into the burn. Thankfully these are plentiful along the trail to the burn from San Francisco, to Sacramento and even Reno. But keep in mind the closer to the burn you are, the busier they will get. The line in Reno on Saturday is apocalyptic!",
              items: ["Walmart"]
            },
            {
              body:
                "Trader Joes and other shops like it can easily be located and will have great healthy, pre-packed, ready to heat up food options that will be great for dinners to keep you going. Way better food than Walmart.",
              items: ["Trader Joes"]
            },
            {
              body:
                "Ice & Coffee are just about the only things you can purchase on the playa. Ice Camps are spread across the map and thankfully we are within walking distance of one. Coffee, and other limited refreshments are available for sale at Centre Camp, but other than that you can’t buy shit.",
              items: ["Ice & Coffee"]
            },
            {
              body:
                "Bring lots of snacks! Trail mix, jerky, dried fruit, croutons, lollies or small chocolates. Anything you can throw in your bag and take around with you! Always carry snacks! They also make great playa gifts.",
              items: ["Bring lots of snacks!"]
            },
            {
              body:
                "Esky/Cooler Maintenance is an important one in making sure you don’t get sick! The following steps is a brief guide on ensuring you don’t spend part of your week spewing from both ends in the porta-potties!",
              items: ["Esky/Cooler Maintenance"]
            },
            {
              body:
                "Make sure your cooler has a drain plug so you can empty any dirty water.",
              items: ["Make sure your cooler has a drain plug"]
            },
            {
              body:
                "Drain that shit every day and replace in the AM with fresh ice!",
              items: ["Drain that shit"]
            },
            {
              body:
                "Separate meats and other food, especially loose fruit and veg and unpackaged food.",
              items: ["Separate meats and other food"]
            },
            {
              body: "Separate food cooler and booze cooler. Enough said.",
              items: ["Separate food cooler and booze cooler."]
            },
            {
              body:
                "Buy decent Ziploc bags to keep your food from getting soggy and waterlogged.",
              items: ["Buy decent Ziploc bags"]
            },
            {
              body:
                "Wash your hands! We mentioned this before but can’t stress it enough.",
              items: ["Wash your hands!"]
            },
            {
              body:
                "Frothin’ Weirdo’s Storage Unit is a small storage garage in Reno which has been kept alive by the last few years of Frothers. This contains a wide variety of camp supplies which will be available for re-use. Closer to the Burn we will advise on what’s available in terms of tents, blankets, bikes and camping gear that may be able to be re-used before you head off to do your supply shop.",
              items: ["Frothin’ Weirdo’s Storage Unit"]
            }
          ],
          "paragraph"
        )}
      </div>

      <Link
          to="/burning-man/camp-with-us"
          className="centered"
          onClick={() => window.scrollTo(0, 0)}
        >
          <BoxedButton text="Camp with Us" />
        </Link>
    </div>
  );
};

export default TipsAndTricks;

import React from 'react';
import './About.css';

const about = (props) => {
    return (
        <div className="aboutMe">
            <div className="summary">
                <h1 className="titles"><b>Summary</b></h1>
                <p className="descriptions">
                    I am a graduate of the University of Colorado Boulder with a Bachelor's of Arts degree in Computer Science.
                    I have experience developing web applications and Android/iOS applications amongst other personal projects.
                    My most recent projects include this website, my portfolio, created using React and Node.js published on ______,
                    my Take A Number application with the goal of steamlining the implementation of social distancing practices while 
                    providing companies with an organized method for maintaining an entrance line into their store, designed with the 
                    Flutter SDK using Dart and having Firebase as a back-end, and Urine Luck, a web application that allows users to
                    find the closest bathroom to them and filter the bathrooms based on metrics such as cleanliness and whether or not
                    you are required to pay to use them. I am an avid fly fisher, backpacker, camper, and skiier and spend most of my 
                    free time participating in those activities. I am a Type-1 diabetic and have been for fourteen years. I am an active
                    individual who believes preservation of our world with regards to climate change is of the utmost importance. I
                    beileive that our worlds population can do substantially more to reduce the impact of social inequalities and 
                    inequities that plague our world and provide assistance and aide to those who are less fortunate than others. 
                    We are all in this together and acting otherwise is detrimental to the longevity of humanity.
                </p>
            </div>
            <div className="goals">
                <h1 className="titles"><b>Goals</b></h1>
            </div>
            <div className="hobbies">
                <h1 className="titles"><b>Hobbies</b></h1>
                <div className="skiing">
                    <h2 className="subTitles">Skiing</h2>
                    <p className="descriptions">
                        I am a skier. Skiing has been a part of my life since I was two years old and it will 
                        remain a part of my life until I can no longer physically participate. The sport allows
                        me to escape from my day-to-day, exercise, experience nature in a unique way, and challenge 
                        myself to be better. I started off similar to most, with my mom and dad holding my hand
                        down the mountain while I was cold and scared. Quickly, I progressed to being the 
                        fastest in my family seeking more challenging terrain. At that point, my dad started
                        taking me through the trees at Santa Fe Ski Mountain and Taos Ski Valley where I 
                        started to understand just how important skiing is to me. As I grew older and became
                        better at skiing, my desire to find tougher terrain was more prominent than ever. I
                        consistently challenged myself to tackle the toughest runs on the mountains and when 
                        that wasn't enough, I started looking for back country terrain. When I moved to Colorado
                        I started skiing Winter Park / Mary Jane and found the Vasquéz Circque. Here I was able to
                        constantly challenge myself in new terrain and refine my form, pushing myself to be the best
                        I could be. Living in Colorado provided me with access to new terrain anywhere I went, always
                        challenging me in new ways and pushing me to be better.
                    
                    </p>
                </div>
                <div className="backpacking">
                    <h2 className="subTitles">Backpacking</h2>
                    <p className="descriptions">
                        I started backpacking, not including the times my parents carried me as an infant, when I was 
                        six years old with my dad and brother. Our first trip was to the Sierra Nevada mountain range
                        in California. From that point on backpacking became a regular part of my life. Every summer 
                        I would spend at least a week backpacking through parts of the John Muir Wilderness with my dad
                        and brother. When I was young, it was hard for me to appreciate these trips for what they were. 
                        At the time they were tough, exhausting, and long making it hard for a ypung child to understand.
                        By the time I was in eight grade, my dad took us on the longest trip I have done. We spent two 
                        weeks hiking along the John Muir trail covering a range of 120 miles. As I have grown older, I 
                        have been able to appreciate these trips and the life lessons learned in a new light. These trips 
                        taught me how to appreciate hard work and self reliability. Yes I had my family with me but without 
                        self-motivation to perservere through the toughest days, I would never have made it. Learning at such 
                        a young age to respect the world around me for what it is, a beautiful and fragile ecosystem that 
                        demands respect and rewards with life lessons and memories, was a difficult task, yet it has helped
                        shape me into the person I am today. In more recent years I have participated in trips with my baby
                        sisters hoping to help them learn the same lessons that I did when I was their age. In short, my 
                        backpacking trips have taught me to respect all those around me, whether it is a human being, a 
                        pika scavanging for food, or a tiny mountain flower growing out of the side of a mountain at 13,000
                        feet, for this world to continue, we must respect life.
                    </p>
                </div>

                <div className="fishing">
                    <h2 className="subTitles">Fly Fishing</h2>
                    <p className="descriptions">
                        I have been fishing for as long as I can remember. Growing up, my dad always loved fishing and of
                        course that passed on to me. As a young child, I was always into spin casting and lures. It was 
                        easy and almost always successful. As I grew older, I payed more attention to my dad fly fishing 
                        and became fond of it. As mentioned above, I grew up backpacking and on these trips I spent a lot
                        of time fishing. At first, I always used a spin reel and lures but, when I was eight years 
                        old I finally asked my dad to teach me to fly fish. At first, he was reluctant towards it solely 
                        becuase flies for fly fishing are expensive and as anyone who has ever learned to fly fish knows, I
                        lost quite a few of them. Nevertheless, he agreed. Learning was no easy task. Getting casting down
                        was difficult, especially for an eight year old, yet I continued and progressed. Next thing to learn 
                        was how to read a river/water for where fish resided. This was a tedious task. It seemed to me that 
                        I should be able to just cast and catch, but that was certainly not true. Once I undestood how to read 
                        the rivers I had to learn how to actually fish them. Placing your line and fly in the correct place
                        and keeping it there is tough. Learning how to mimic what a real fly looks like and acts like in while
                        floating through moving water took patience, something that was especially hard for me. As the years
                        passed, fly fishing grew from something that was hard to learn and tested my patience to something that 
                        felt natural. understanding that patience and meticulousness are learned traits as well as necessary to 
                        success in fly fishing, and many other aspects of life, has taken many years. Now I look back on the 
                        process I went through to become a "fly fisher" and apply the principles to many other aspects of my life. 
                        It has taught me to understand that patience and hard work can pay off but may also leave you empty handed.
                        That there is never a promise of reward but nevetheless you should always give your all. 
                    </p>
                </div>
                <div className="camping">
                    <h2 className="subTitles">Camping</h2>
                    <p className="descriptions">
                        Camping has been a part of my life since before I was born. My mom tells me stories of my dad, my brother,
                        and her camping while she was pregnant with me. As a child, I enjoyed camping but easily got tired of 
                        having to work hard to set up a minimalistic campsite for the night all so I could be somewhat uncomfortable
                        and slightly disapointed with the quesedillas we made for dinner. Playing outside was fun but often it was 
                        hard for me to understand why my family always put so much effort into finding a remote area rather than be
                        "normal" and go to an amusement park or the likes. The older I got the more I began to understand the different
                        perspectives I had on this. On one hand, I thoroughly enjoyed having a comfortable bed and a hot, easy-to-cook
                        meal at my fingertips but, on the other hand, I began to appreciate the real world for what it was. Understanding 
                        that being comfortable and having things be easy for me wasn't all there is to life. My many days and nights spent
                        camping taught me to appreciate living minimalistically and only having what I need to get by. Learning that life
                        is more than hallmark moments, that to be happy is not synonomous with having everything in life that I want but
                        with having everything in life that I need. I thank my mom and my dad for teaching me to appreciate the natural world
                        through camping and for having taught me to be happy without being materialistic. 
                    </p>
                </div>
                <div className="soccer">
                    <h2 className="subTitles">Soccer</h2>
                    <p className="descriptions">
                        I have played soccer since I was three years old. At first, I played in somewhat non-competetive leagues just enjoying
                        my time. As I grew older, I became much more competetive and had a desire to progress. The first club that I joined was
                        Rio Vista FC out of Albuquerque, NM. On this team I started to learn how to play as an actual team, learning to work 
                        together as a team towards a common goal. I switched teams/clubs to Rush and joined my brothers team where I started to 
                        see a lot more progress in my ability as a player and as a leader on the team. In eight grade I switched back to my original 
                        club and onto a much more competetive team where I stayed until my senior year of highschool. At first, I was just another
                        player continuously getting better as a player and a team member. By the time highschool soccer came around, I was the 
                        captian of my club team and the captain of my highschool team. On both, I saw success and helped lead my teams to the state
                        finals. Furing college, I joined a co-ed recreational league in Boulder, CO with my brother. In both seasons I played on
                        this team we made it to the league finals. My time as a soccer player has taught me how to work together on a team and be 
                        part of something bigger than just me. It has showed me my strengths as a leader and what perseverance and hard work can lead to.
                    </p>
                </div>
            </div>
            <div className="diabetes">
                <h1 className="titles"><b>Diabetes</b></h1>
                <p className="descriptions">
                    I was diagnosed with Type-1 diabetes on November 11, 2006, when I was eleven years old. As anyone can imagine, this was a life changing moment for me.
                    In the moment I did not fully understand what it meant. At the time, one of my closest friends, as well as two of my cousins, was 
                    a Type-1 diabetic and I saw everything he had to do on a daily basis to take care of it. All three had insulin pumps and close to 
                    constant monitoring of every aspect related to their diabetes. To me, I did not know how to comprehend all of this. Prior to my 
                    diagnosis, it just seemed like an extra thing they had to do when they wanted to eat but I quickly learned that it is much more than
                    that. Yes, constant monitoring is a part of it, but it is much more than just that. I had to learn how my body acted in every situation,
                    I had to learn how my body reacted to different stimuli such as eating, activity, sleeping, sitting around doing nothing, and any other
                    situation that you can imagine. I had to become completely in tune with how I felt at every moment of the day and be entirely aware
                    how my body was reacting to every situation. As an eleven year old, I was lucky and unlucky in different ways. Type-1 diabetics are
                    typically diagnosed within the first year of their life and as a result, it is all they know. Not that that makes them lucky, but it 
                    does allow them to grow up understanding all of this whereas for me, my entire world that I had known was changing. After spending five
                    days in the hospital meeting with my first endochrinologist and many other doctors, barely being able to sleep as a result of the constant
                    stream of doctors coming in to either test my blood sugar or draw vials of blood from me, I was sent home. At first it was terrifying. 
                    Knowing that if I wasn't completely in tune with myself I could easily send myself back to the hospital if not worse. As time went on
                    my life started to feel more regular. Quickly I was able to "normalize" the routine of testing my blood sugar multiple times a day, 
                    giving myself numerous insulin injections a day, and getting back to school and soccer. With the support of my friends and family
                    my life started to seem normal again. 
                </p>

                <p className="descriptions">
                    When I was first diagnosed, I was told multiple times that my life would change and would never be the same again. To me, that felt 
                    more like a challenge than anything else. I try not to stereotype in any way for obvious reasons, but at first, I was lead to believe
                    that no diabetic could live the life that I had prior to my diagnosis. Going backpacking, skiing, being active, and just going out
                    with my friends to have a normal day all seemed completely out of reach. Fortunately for me, my mom and dad held different beliefs.
                    My first trip away from home with diabetes came the winter break after my diagnosis. My mom, her boyfriend at the time, brother, and I
                    traveled to Costa Rica for eight days. This was difficult. Being in a foreign country and having to take care of a brand new disease
                    that I had for only two months at the time brought on a plethera of unpredictability that I had never dealt with before. Yet, with the
                    help of my family, I made it! In doing so, I learned many new things about diabetes in general as well as myself. I learned that I 
                    could do "it". Next came my first backpacking trip with diabetes. This again was a terrifying task ahead of me for the obvious reason 
                    of having diabetes but also because my dad decided this was the perfect year to finally try and tackle a loop through the Sierra Nevada
                    Mountain range where we summited one of the highest passes, Muir Pass. Regulating my diabetes while backpacking was difficult. Having to
                    be constantly aware how I felt while traversing through hostile environments and carrying everything that I needed to survive for the week
                    was no easy task. Once again, with the support of my family, I made it. As time went on, I started to realize how mislead I had been.
                    Yes it is true that some diabetics cannot continue with the same lifestyle they had before. I am not one of them so it would be unfair
                    of me to make any comment towards that subject. For me on the other hand, what I learned is that being adaptable to hurdles thrown your 
                    way is one of the greatest qualaties I can poses. I had to learn to take care of myself with regards to a potentially life-threatening
                    disease and never tell myself I can't do it as a result of diabetes. Through many more stories similar to the previous, I have been able
                    to live my life the way I want to. There is no doubt at times I wish I was not a diabetic. Contrary to what most people beilieve though, 
                    it is not when I am testing my blood sugar for the fifteenth time in a day, when I am injecting myself with insulin and getting odd looks
                    from everyone around who think I am doing heroin or steroids, or when I have to hold everyone around me up for a minute while I get my 
                    blood sugar under control. It is when I am force feeding myself skittles and chocolate bars to get my blood sugar back up to a safe level,
                    when I let myself fall into the mentality of I cannot do whatever is at hand because I am diabetic, or when I have to go see a doctor 
                    and tell them I am a diabetic leading them to assume that whatever I am seeing them for is a result of me being diabetic. It is in the
                    moments when I tell myself or other people tell me "no you can't, you're a diabetic". I have proven to myself time and time again that 
                    no matter what it is, having Type-1 diabetes will never hold me back.
                </p>
            </div>
            <div className="hurdles">
                <h1 className="titles">Hurdles</h1>
                <div className="headaches">
                    <h2 className="subTitles">Cluster Headaches</h2>
                    <p className="descriptions">
                        During my second semester of my junior year in college I was eating dinner at home with my roommate. After feeling odd for a few minutes,
                        I ended up passing out and having to make a trip to the hosptial. After not finding anything obviously wrong, I was released later that
                        night. Over the next few days I began having terrible headachs that came on for roughly fifteen minutes at a time and about ten to twenty
                        times per day. The pain that I felt was like nothing I had experienced before. I started seeing specialists to try and figure out what was
                        going on. After about two months of this, I was finally diagnosed with Cluster Headaches. As a result of all that I had been going through,
                        I had missed roughly one and a half months of classes during my hardest semester. I was taking Algorithms, Computer Systems, Intro to Data
                        Science, and Numerical Computation at the time. Having missed as much time as I did, my teachers and advisors, though they had been very 
                        kind, lenient, and supportive, all advised me to withdraw from the semester and retake the classes the following spring semester. I decided
                        not to give up and push through. With the help and understanding of my teachers and through many hours of hard work, I managed to pass all 
                        my classes with grades that I was proud of having missed a smuch school as I did and while still suffering through my headaches. At the end
                        of the semester, two of my teachers made a point to pull me aside and congratulate me on being able to actually pass my classes, let alone
                        get the grades that I did. This was without a doubt the hardest semester of school I experienced and I am proud of the effort and work 
                        that I put into it as well as my dedication to not giving up despite the amount of pain I experienced.
                    </p>
                </div>
                <div className="kneeSurgery">
                    <h2 className="subTitles">Knee Surgery</h2>
                    <p className="descriptions">
                        In January of 2016, I was skiing and fell in such a way that required me to have knee surgery. The operation was to remove inflamed Plica 
                        from my right knee, which for me had a three to six month recovery period. At the time, I was taking a few classes, most notably was my 
                        physics class, at Front Range Community College as well as working at the Whole Foods Market Seafood Counter. I had an A in al my classes 
                        and overall was doing very well in school and was enjoying my job at Whole Foods. When I had knee surgery, I was forced to quit my job
                        becuase I had only been working there for just under six months as well as having to miss three weeks of school for the recovery. In doing
                        so, I quickly fell behind in my classes and all of my grades dropped. My physics professor advised me to drop the class and re-enroll 
                        for the next semester. I decided to go against her advisement, as well as my other professors, and not withdraw from classes. At the 
                        end of the semester, I managed to pass all my classes with A's and high B's, scoring one of the highest grades in my physics class. I felt
                        very accomplished seeing as though I was balancing being behind in school and missing more classes to attend intensive physical therapy. 
                        This experience taught me to perservere through tough situations and the value of hard work and determination.
                    </p>
                </div>
            </div>
        </div>
    );
}




export default about;
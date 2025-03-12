// 预设角色数据
const CHARACTERS = {
    good: [
        {
            identity: "府尹",
            appearance: ["来人穿着紫色的官袍负手而立，月光下衣服上的暗纹隐约可见。", "踏着硬靴穿着不凡的人……好大的官威。"],
            questions: {
                "你为什么来这？": ["……少侠此去河西数日不归，想来收获颇丰？", "听说此地有盗匪作乱，特来查探，少侠何必生疑。", "……本官行事还要给少侠汇报？"],
                "你的暗卫呢？":["若我说门前只有本官一人，少侠可愿相信？"]
            },
            greetings: [
                "少侠，见了本官还不开门，你可想清楚后果。",
                "本官途经此地，见天色已晚，可否借宿一宿？"
            ],
            reactions: {
                accept: ["府尹不紧不慢地走进来，神色如常道：“如今世道纷乱，少侠谨慎些也是应当的。”", "府尹摩挲了一下玉扳指，颔首向少年道谢。<br>……然后径直走向了少年的床位。"],
                reject: ["门外传来一声轻笑，听不出情绪。“也罢，那少侠自己可要想清楚利害关系。”"]
            },
            items: [
                {
                    name: "名贵面脂",
                    desc: "由珍稀的药材制成，质地细腻，香气扑鼻。"
                },
                {
                    name: "印信",
                    desc: "一枚雕刻精细的印信，在月光下泛着淡淡的光泽，边缘处还沾着些许朱砂的痕迹。"
                },
                {
                    name: "笏板",
                    desc: "一块光滑的象牙笏板……这人下朝就马不停蹄地赶过来了？"
                },
                {
                    name: "公文卷宗",
                    desc: "一卷写满政务的皮质卷宗，记录了一些案件和政务。真敬业呀……"
                }
            ]
        },
        {
            identity: "劲装侠客",
            appearance: ["来人一幅讲究的贵公子模样，长发散开，似乎没有掺杂一丝一毫的尘土。"],
            questions: {
                "你身上带了什么东西？": ["一些小物件罢了，少侠感兴趣？", "没什么要紧的东西。"],
                "我不相信你。": ["……少侠思虑周全，是好事。"],
            },
            greetings: [
                "少侠，是我，今夜的风沙太大，实没有安歇之处，可否让我同住一晚，日后定有重谢。"
            ],
            reactions: {
                accept: ["多谢少侠，不菲报酬……都好说。"],
                reject: ["门外的身影似乎顿了一下：“……少侠有成算便好。”", "“……”过了一会，你听到门口的脚步声渐渐远了。"]
            },
            items: [
                {
                    name: "玉楼春花枝",
                    desc: "刚采摘下不久，香气轻浅，还带着几滴露水。"
                },
                {
                    name: "发带",
                    desc: "精致又漂亮的发带，上面绣着一只展翅的鹰。"
                },
                {
                    name: "毛笔",
                    desc: "几支毛笔被这人别在腰间……不过行走江湖真的用得到吗？"
                },
                {
                    name: "飞镖",
                    desc: "闪着寒光的飞镖，不过似乎很干净。让人怀疑它的主人是否真的会用到它。"
                },
                {
                    name: "佩剑",
                    desc: "似乎不是寻常佩剑，能抽出一段锁链当鞭子也说不定？"
                }
            ]
        },
        {
            identity: "簪花少年",
            appearance: ["门口站着一位身量不高的稚童，鬓边簪了一只小花。","一个簪着花的孩童站在门口，风吹过时显得稍有一些清瘦，依稀能看清面容，有些熟悉。"],
            questions: {
                "这么小的孩子怎么在这？": ["抱歉，我也不知道，我一醒来就在这里了，可以让我借宿一晚吗？我哥哥的队伍应该在这不远，明早我就离开这里。"],
                "你带了什么？": ["我有一些银钱，如果您肯帮忙我可以把它们给你！"],
            },
            greetings: [
                "你好？有人吗？可以帮帮我吗？"
            ],
            reactions: {
                accept: ["孩童抬起还有些稚嫩的面庞，却郑重其事地说道“大哥哥谢谢你，今日之恩来日当涌泉相报。”", "那孩子不着痕迹地用手抹了一下眼睛，可以看到略有些发红的眼角。开口时声音却平静得听不出来端倪，“多谢大侠出手相助……谢谢你。"],
                reject: ["小小的身影在门口停了片刻，", "“……”过了一会，你听到门口的脚步声渐渐远了。"]
            },
            items: [
                {
                    name: "花",
                    desc: "还稳稳的别在孩童发间，不过花瓣有些干瘪卷曲了。"
                },
                {
                    name: "玉佩",
                    desc: "一只完好的玉佩，看上去成色还不错，依稀可以辨认上面刻着“匡义”两个字，是他的名字吗？"
                },
                {
                    name: "银钱",
                    desc: "这孩子带着几枚银钱，应该足够他几日的路上花销了。"
                },
            ]
        }
    ],

    bad: [
        {
            identity: "劲装侠客",
            appearance: ["来人一幅讲究的贵公子模样，不过衣角有些脏了，染上些褐色的东西。是泥土，还是……？"],
            questions: {
                "你身上带了什么东西？": ["不过是些防身的玩意，少侠觉得呢？", ],
                "我不相信你。": ["……*门口的人没有回答*","不知如何才能取信于少侠？"]
            },
            greetings: [
                "少侠，是我，今夜的风沙太大，实没有安歇之处，可否让我同住一晚，日后定有重谢。",
            ],
            reactions: {
                accept: ["贵公子模样的人也客气，径直路过了少年，他的模样称得上清秀，几乎要让人放下防备，不过人人皆可貌相否？"],
                reject: ["门口传来“嘭”的一声响，再从窗口看去，只有一些烟尘，和烟尘底下隐约可见的一张符纸。"]
            },
            items: [
                {
                    name: "发带",
                    desc: "精致又漂亮的发带，上面绣着一只展翅的鹰。"
                },
                {
                    name: "飞镖",
                    desc: "寒光凛凛，尖端沾着鲜红的液体，滴落在地上的声音很清脆。"
                },
                {
                    name: "玉楼春花枝",
                    desc: "刚采摘下不久，香气轻浅，还带着几滴露水。"
                },
                {
                    name: "奇怪的镂空球体",
                    desc: "……？"
                },
                {
                    name: "符纸？",
                    desc: "一张泛黄的纸，上面写了写看不懂的东西。"
                }
            ]
        },
        {
            identity: "劲装侠客",
            appearance: ["来人一幅讲究的贵公子模样，衣摆处怎么鼓囊囊的……等一下，怎么毛茸茸的……那是……尾巴？？","来人一幅讲究的贵公子模样……少年觉得自己一定是眼花了，不然来人怎么脑袋上有一对毛茸茸的狐狸耳朵？","来人一幅讲究的贵公子模样，长发散开，似乎没有掺杂一丝一毫的尘土。"],
            questions: {
                "你身上带了什么东西？": ["新鲜的食材，少侠有兴趣共同品尝一下吗？", ],
                "我不相信你。": ["……*门口的人没有回答*","不知如何才能取信于少侠？"]
            },
            greetings: [
                "少侠，是我，今夜的风沙太大，实没有安歇之处，可否让我同住一晚，日后定有重谢。",
                "少侠，夜深露重了，不止可否借此处歇脚？"
            ],
            reactions: {
                accept: ["贵公子模样的人进来后，对着少年眯着眼睛笑了笑：“该怎么报答你呢……恩人？”"],
                reject: ["“真可惜”门口的人似乎耸了耸肩，转身离开了，在他走后，少年打开门，发现了一小串梅花状的脚印，通向廊外草丛。"]
            },
            items: [
                {
                    name: "绒毛",
                    desc: "一团毛茸茸，看不出取自何种动物。"
                },
                {
                    name: "肉块",
                    desc: "很新鲜，还在渗出血水，或许是一种适合暴风雨夜的好食材，少年突然有些想念炙肉的油脂香气。"
                },
                {
                    name: "玉楼春花枝",
                    desc: "刚采摘下不久，香气轻浅，还带着几滴露水。"
                },

            ]
        },
        {
            identity: "劲装侠客",
            appearance: ["来人一幅讲究的贵公子模样，神情并不着急，少年从他欢快吐出字眼的口中看到了吐出的信子……蛇信子？","来人一幅讲究的贵公子模样……挺好的，如果少年没看到他脖颈处堪堪用布料遮住，却在月光下无处遁形的几片鳞片的话。","来人一幅讲究的贵公子模样，长发散开，似乎没有掺杂一丝一毫的尘土。"],
            questions: {
                "你身上带了什么东西？": ["不过是些防身的玩意，少侠觉得呢？", ],
                "我不相信你。": ["……*门口的人没有回答*","不知如何才能取信于少侠？"]
            },
            greetings: [
                "少侠，是我，今夜的风沙太大，实没有安歇之处，可否让我同住一晚，日后定有重谢。",
                "少侠，夜深露重了，不止可否借此处歇脚？"
            ],
            reactions: {
                accept: ["贵公子模样的人进来后，忽然靠得很近，近到少年耳畔听到笑意中掺杂着的嘶嘶声。"],
                reject: ["“唉，这世道...”门口的人似乎耸了耸肩，转身离开了，在他走后，少年打开门，在地上拾起了一小片晶莹的蛇鳞。"]
            },
            items: [
                {
                    name: "蛋",
                    desc: "几颗形状很饱满漂亮的蛋……什么动物的卵？等一下？他怎么把卵揣在……？"
                },
                {
                    name: "铜镜",
                    desc: "一面古旧的铜镜，镜面泛着微光。"
                },
                {
                    name: "玉楼春花枝",
                    desc: "刚采摘下不久，香气轻浅，还带着几滴露水。"
                },
                {
                    name: "头骨",
                    desc: "大约只有巴掌大的头骨。看不出来属于什么物种。"
                },
            ]
        }
    ]
};

let currentVisitorIndex = 0;
let visitors = [];
let playerChoices = [];
let playerName = "";

function createVisitor(alignment) {
    const pool = CHARACTERS[alignment];
    const template = pool[Math.floor(Math.random() * pool.length)];

    // 必带前两项
    const requiredItems = template.items.slice(0, 2);

    // 随机0-2件可选物品
    const optionalItems = template.items.slice(2);
    const randomCount = Math.floor(Math.random() * 3); // 0-2
    const selectedOptional = optionalItems
        .sort(() => 0.5 - Math.random())
        .slice(0, randomCount);

    return {
        revealed: false,
        alignment,
        greeting: template.greetings[Math.floor(Math.random()*template.greetings.length)],
        identity: template.identity,
        reactions: template.reactions,
        appearance: template.appearance[Math.floor(Math.random() * template.appearance.length)],
        questions: Object.fromEntries(
            Object.entries(template.questions).map(([q, answers]) =>
                [q, answers[Math.floor(Math.random() * answers.length)]]
            )
        ),
        items: [...requiredItems, ...selectedOptional],
        askedQuestions: new Set()
    };
}

async function showVisitor(index) {
    const visitor = visitors[index];

    // 首次
    if(!visitor.greetingShown) {
        await showNarration(`<em>门外传来声音：</em>"${visitor.greeting}"`);
        visitor.greetingShown = true;
    }

    // 加载操作界面
    let html = `<div class="character-profile">
        <h3>访客：${visitor.revealed ? visitor.identity : '？？？'}</h3>
        <button onclick="showAppearance()">观察</button>
        ${visitor.revealed ? `
            <button onclick="showQuestionOptions()">询问</button>
            <button onclick="checkItems()">听风辨物</button>
        ` : ''}
        <div id="questionOptions" class="question-options"></div>
    </div>`;

    document.getElementById('actions').innerHTML = html;
    document.getElementById('judgment').style.display = visitor.revealed ? 'block' : 'none';
}



function showQuestionOptions() {
    const visitor = visitors[currentVisitorIndex];
    const options = Object.keys(visitor.questions)
        .map(q => `<button class="question-btn" 
            onclick="askQuestion('${q}')" 
            ${visitor.askedQuestions.has(q) ? 'disabled' : ''}>
            ${q}
        </button>`)
        .join('');

    document.getElementById('questionOptions').innerHTML = options;
}

function askQuestion(question) {
    const visitor = visitors[currentVisitorIndex];
    visitor.askedQuestions.add(question);
    document.getElementById('visitorInfo').innerHTML = `
        <div class="narration">${visitor.identity}："${visitor.questions[question]}"</div>
    `;
    showQuestionOptions();
}

function startGame() {
    playerName = document.getElementById('playerName').value.trim();
    if (!playerName) {
        alert("最好还是起一个假名吧……");
        return;
    }
    document.getElementById('nameInput').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    initializeGame();
}

async function initializeGame() {
    visitors = generateVisitors();
    currentVisitorIndex = 0;
    playerChoices = [];

    await showNarration(
        `店小二领着${playerName}来到了客房<br>放下行李，外面竟然开始打起了早雷<br>准备早些休息……<br>“咚咚咚！咚咚咚！”<br>似乎有人敲门，去看看发生了什么？`,
        2000
    );

    await showVisitor(currentVisitorIndex);
}

function generateVisitors() {
    let visitors = [];
    const goodCount = Math.floor(Math.random() * 2) + 1; // 1-2个好人
    const badCount = 3 - goodCount;

    for (let i = 0; i < goodCount; i++) visitors.push(createVisitor('good'));
    for (let i = 0; i < badCount; i++) visitors.push(createVisitor('bad'));
    return visitors.sort(() => Math.random() - 0.5);
}

async function showNarration(text, delay=1500) {
    return new Promise(resolve => {
        const container = document.createElement('div');
        container.className = 'splash-screen';

        const textContainer = document.createElement('div');
        textContainer.className = 'narration';
        container.appendChild(textContainer);

        document.body.appendChild(container);
        document.getElementById('gameContainer').style.visibility = 'hidden';

        let index = 0;
        const typeWriter = () => {
            if (index < text.length) {
                if(text[index] === '<') {
                    const tagEnd = text.indexOf('>', index);
                    textContainer.innerHTML += text.slice(index, tagEnd+1);
                    index = tagEnd + 1;
                } else {
                    textContainer.innerHTML += text[index];
                    index++;
                }
                setTimeout(typeWriter, 80);
            } else {
                setTimeout(() => {
                    container.remove();
                    document.getElementById('gameContainer').style.visibility = 'visible';
                    resolve();
                }, delay);
            }
        }

        typeWriter();
    });
}




async function makeDecision(openDoor) {
    const visitor = visitors[currentVisitorIndex];
    const isLast = currentVisitorIndex === 2;

    const reaction = openDoor ?
        visitor.reactions.accept[Math.floor(Math.random()*visitor.reactions.accept.length)] :
        visitor.reactions.reject[Math.floor(Math.random()*visitor.reactions.reject.length)];
    await showNarration(`${reaction}`);

    playerChoices[currentVisitorIndex] = { decision: openDoor, visitor };

    document.getElementById('actions').innerHTML = '';
    document.getElementById('visitorResponse').innerHTML = '';

    if (!isLast) {
        await showNarration(`${playerName}${openDoor ? '打开' : '闩上'}了门闩...<br>正要重新躺下，敲门声再次响起`);

        currentVisitorIndex++;
        await showVisitor(currentVisitorIndex);
    } else {
        await showNarration(`最后一位访客的脚步声渐渐远去，住客们安然睡去...<br>油灯将尽，漫长的夜晚终于过去`);
        showResult();
    }
}


function checkItems() {
    const visitor = visitors[currentVisitorIndex];
    let itemsHtml = `<div class="item-inspection">携带物品：<ul class='item-list'>`;

    visitor.items.forEach(item => {
        itemsHtml += `
            <li class="item-name" 
                onclick="showItemDetail('${item.name}', '${item.desc}')">
                ${item.name}
            </li>`;
    });

    itemsHtml += "</ul></div>";
    document.getElementById('visitorResponse').innerHTML = itemsHtml;
}

function showItemDetail(name, desc) {
    document.getElementById('itemTitle').textContent = name;
    document.getElementById('itemDescription').textContent = desc;
    document.getElementById('itemModal').style.display = 'flex';
}

function closeItemModal() {
    document.getElementById('itemModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('itemModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('itemModal').addEventListener('click', e => {
    if(e.target === document.getElementById('itemModal')) {
        document.getElementById('itemModal').style.display = 'none';
    }
});


function showAppearance() {
    const visitor = visitors[currentVisitorIndex];
    visitor.revealed = true;
    document.getElementById('visitorResponse').innerHTML =
        `<div class="observation-result">酒肆的窗户显然年久失修了，少年靠近那扇漏风的窗户，透过缝隙看去：${visitor.appearance}</div>`;
    showVisitor(currentVisitorIndex);
}


function showResult() {
    document.getElementById('actions').innerHTML = '';
    document.getElementById('judgment').style.display = 'none';

    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });

    const correctDecisions = playerChoices.filter(choice =>
        choice.decision === (choice.visitor.alignment === 'good')
    ).length;

    let resultText = `<div class="result-box">`;
    resultText += `<h3>🌄 破晓时分 🌄</h3>`;

    resultText += `${playerName}从床上悠悠转醒，房间内只剩下他一个人。`;

    resultText += `<hr><p>正确判断：${correctDecisions}/3</p>`;

    const badCount = playerChoices.filter(choice =>
        choice.decision && choice.visitor.alignment === 'bad'
    ).length;

    if(badCount > 0) {
        resultText += `<p class="narration bad-ending">昨夜并不安稳，少年几度感到难以呼吸，又好像是溺水。动了动手指，后知后觉地感受到指尖残留着的水渍，等等，怎么连脸上也……？</p>`;
    } else {
        resultText += `<p class="narration good-ending">酒肆安然迎来黎明，睡醒时少年在手边摸到了刻着“义”字的玉佩……看来又能讨到一笔不菲的报酬了。</p>`;
    }

    resultText += `<button onclick="location.reload()">🔄 再历此夜</button>`;
    resultText += `</div>`;

    document.getElementById('result').innerHTML = resultText;
}
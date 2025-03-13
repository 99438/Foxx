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
                accept: ["府尹不紧不慢地走进来，神色如常道：“如今世道纷乱，少侠谨慎些也是应当的。”", "府尹摩挲了一下玉扳指，颔首向少年道谢。……然后径直走向了少年的床位。"],
                reject: ["门外传来一声轻笑，听不出情绪。“也罢，那少侠自己可要想清楚利害关系。”"]
            },
            outcomes: [
                "酒肆安然迎来黎明，睡醒时少年在手边摸到了一枚沾着露水的玉扳指。案头留书：『赠君明月，以谢夜泊』",
            ],
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
                reject: ["门外的身影似乎顿了一下：“……少侠有成算便好。”", "“……”过了一会，听到门口的脚步声渐渐远了。"]
            },
            outcomes: [
                "酒肆安然迎来黎明，睡醒时少年在手边摸到了一只没有线的漂亮风筝，不知此刻的风筝线又牵在谁的手心呢？",
            ],
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
                reject: ["小小的身影在门口停了片刻，", "“……”过了一会，听到门口的脚步声渐渐远了。"]
            },
            outcomes: [
                "来自清河的孩子王似乎天生和这小小的簪花少年意趣相投，他们有一搭没一搭的聊了很久。天蒙蒙亮时，少年轻轻拥抱了这个看起来有些早熟的孩子，再睁眼时怀抱中的温度便如烟消失了。",
            ],
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
        },
        {
            identity: "披裘贵客",
            appearance: ["门口站着一位相貌风致，身披毛绒裘斗的贵客。仔细一看，他的肚子似乎有一团与他气息相融的白气，这是一位已经有孕的男客。","站在门口到是一个披着裘衣的男子，他低头扶着门框，掩在斗篷下的手小心翼翼似乎摸着肚子。"],
            questions: {
                "你怀了孕，怎么还独身一人出来行走？": ["你是如何看出……！好吧，我同夫君约定在前头的丰禾村碰面，你给我借住一晚，定同你支付不菲报酬。"],
                "那你身上带了什么？": ["我带了布巾，怎么，你要用？（意义不明的轻笑）"],
            },
            greetings: [
                "你好？有人吗？可以让我进去借住一晚么？"
            ],
            reactions: {
                accept: ["贵客走进房门，他本应坐在一旁备好被褥的空床位上休整，却走向少年慎重其事地道谢，少年看见他脸色苍白，行动不便，并且动作之间还露出微鼓的幅度。少年心头一软，连忙扶起他的同时，还在心里埋怨他那个不知身在何处的丈夫。"],
                reject: ["挺拔的身影伸出手轻轻伏在门框处，少年借着破损的窗口看到他脑袋抵着门急促的喘息着，他看起来的确身体不适，少年为之前的决定感到有些后悔，刚想开口时，听到门口的脚步声渐渐远去。"]
            },
            outcomes: [
                "少年一夜好眠，醒来之时却发现掌心握着半件玉佩。他仔细一看，发现这东西与昨夜那位贵客身上那件同心佩乃一对之物，上头刻着一只灵活灵现的小狗。",
            ],
            items: [
                {
                    name: "同心玉佩",
                    desc: "半件同心佩，刻着一只小狐狸，玉质柔润，看起来价值不菲，另一半似乎在别人之手。"
                },
                {
                    name: "绣花粗劣的荷包",
                    desc: "这荷包上的花纹扭曲，勉强可以看出绣得是鸳鸯，但是……怎么两只都是色彩鲜艳的雄鸟？不过这荷包鼓鼓囊囊，可见他并不缺钱。"
                },
                {
                    name: "布巾",
                    desc: "一条沾满乳黄色污渍的布巾，仔细嗅闻发觉贵客身上淡淡的奶腥味便是来源于此。"
                },
            ]
        },
        {
            identity: "战损武将？",
            appearance: ["看起来是一位受伤的将军，腿上止不住的鲜血正在流淌，面容略显沧桑但不陌生，不知道为何牵了头驴"],
            questions: {
                "你为何如此这般狼狈？": ["乱世中受伤乃常事，莫要大惊小怪……"],
                "我不相信你。": ["无礼！你怎可…罢了！爱信不信！"],
            },
            greetings: [
                "我途中遇难，负伤在身，坐骑也饥疲不堪，恳请少侠让我借宿一晚，讨些草料，若能施舍一碗热汤，更当感激不尽，朕，不，我来日定当重谢。"
            ],
            reactions: {
                accept: ["多谢少侠，来日的回报定不会让你后悔，说完拍了拍你的肩膀把驴也牵进了屋。"],
                reject: ["你…你会后悔的…武将无力地锤打了门板后伴随着驴蹄声渐行渐远，少年打开一条门缝看到一地血迹有些后悔…"]
            },
            outcomes: [
            ],
            items: [
                {
                    name: "玉佩",
                    desc: "成色，和上面的字都看不清了。"
                },
                {
                    name: "金疮药",
                    desc: "已经是空瓶了。"
                },
                {
                    name: "肉夹馍",
                    desc: "已经破烂如糜，不能再吃了。"
                },
                {
                    name: "匕首",
                    desc: "刀柄上镶嵌了黄金和宝石，看起来价值不菲。"
                },
            ]
        },
        {
            identity: "衣着华贵的怪人",
            appearance: ["门外的人神情憔悴，双眼布满血丝。他衣着华丽，胸前的衣襟却翻起来一角。雷电闪过，照亮了他官帽下凌乱的额边碎发。"],
            questions: {
                "你是谁？": ["（门外的人听见少年的声音，神情十分动摇。）我…我是与你有缘之人。"],
                "这附近并没有村落或驿站，你怎么会独自到这来？": ["风雨无常，人生亦是如此。我本不该出现在这里，或许是命运指引我来到这扇门前。","我也从未想到……还能再见到你。"],
            },
            greetings: [
                "少侠，打扰。外头风雨实在太大，能否恳请您行个方便，让我暂时进屋避一避雨？"
            ],
            reactions: {
                accept: ["“少侠的恩情，我自当铭记于心。”门外人小心翼翼地进门，尽量不让身上的风雨弄湿屋内。他的眼睛盯着少年看了很久很久，似有许多的话要说。但最后，他只是静静地坐在少年床头，轻轻替他掖了掖被角。"],
                reject: ["门外的人很快地眨了眨眼，然后低下了头。“我理解你的顾虑。无论如何，你的安全……是最重要的。”他后退一步，安静地伸出手贴在门边上，视线热烈得几乎要穿墙而入。“我不强求，只要你一切安好……就好。”门外人轻叹一声，转身毅然决然走进了风雨之中。"]
            },
            outcomes: [
            ],
            items: [
                {
                    name: "一枚玉玺",
                    desc: "皇权的象征，由珍贵的玉石雕刻而成。"
                },
                {
                    name: "压胜玉佩",
                    desc: "这个东西明明前几天才刚被自己从太一宫抢出来。为什么在他手里？"
                },
                {
                    name: "一枚香囊",
                    desc: "看起来很旧了，散发出一股枯萎的玉楼春香气。"
                },
            ]
        },
        {
            identity: "老叟",
            appearance: ["一位眼神沉重的老叟，贵气的丝绸在月光下泛着光。腿部貌似有伤。"],
            questions: {
                "你是从何方来？": ["老夫走过一段白雾，尽头是此处。"],
                "你家人呢？为何无人同行？": ["老夫一人前往，是条不归路。"],
            },
            greetings: [
                "少侠，可否让老夫同你住一宿。"
            ],
            reactions: {
                accept: ["老叟并没有说什么，只是盯着你看，眼里满是眷恋。“少侠，多年未见。”"],
                reject: ["老叟皱了一下眉头，淡淡地笑着说“少侠有此戒备心，也好。”老叟继续向前路走去，腿上的伤让脚拖沓在沙面上，发出沙沙声。"]
            },
            outcomes: [
            ],
            items: [
                {
                    name: "醒愁玉桂枝",
                    desc: "上面已经破了几个缺口，但看得出来被保护的很好。"
                },
                {
                    name: "绕线架",
                    desc: "用来整理纸鸢线，边角处的磨损圆润光滑，像是无数次摩挲留下的痕迹。"
                },
                {
                    name: "金疮药",
                    desc: "大概是用来治疗伤口的。"
                },
            ]
        },
        {
            identity: "贵家小姐",
            appearance: ["门口站着一位眉眼昳丽，身材高挑的女子，她脸上戴着厚厚的纱巾，少年看不清楚她的脸色，却无端觉得这人眉眼和神态十分熟悉…有点像…少年猛的回过神，脸色烧红。","站在门口到是一个戴着面纱的女子，她的手十字交叉放在小腹上，看起来十分安静，少年从她身上嗅到熟悉的香味…有点像前几天离开开封送给某人的脂膏的气味。"],
            questions: {
                "你一介女子，怎么没有贴身侍卫护着？": ["不用少侠关心，本…本小姐会一点武，自保不成问题。"],
                "那你身上带了什么？": ["她垂下眼摸了摸行囊里的东西，回答：“总是些自保的东西，不如少侠功夫好。”"],            },
            greetings: [
                "你好？有人吗？可以让我进去借住一晚么？"
            ],
            reactions: {
                accept: ["女子走进房门，少年发现她挑了离出口最远的床榻，随即捡了被褥细细挑刺，少年斜过视线悄悄撇着她，却没想到她一下抽出一条丝绸被子垫在床板上，面色不虞地躺上去。"],
                reject: ["那个女子哼了一声，走下楼的步子一下比一下重，少年可以听出她絮絮叨叨说着什么“不识好歹”，“笨狗”之类的话语，少年人无端恶寒，记起府尹大人和丞相大人商议要事提及自己时，同有所感"]
            },
            outcomes: [
            ],
            items: [
                {
                    name: "行囊",
                    desc: "一个似乎能够装很多东西的行囊，仔细一看怎么和自己手头上的这个乾坤袋这么像呢…呃，似乎绣着人家的闺名，少年红着脸略过，还是不小心看见了一个字：“义”。"
                },
                {
                    name: "丝帕",
                    desc: "一条绣着精致花样的丝帕，虽然边缘有些粗糙，但是保存良好，同时带着淡淡暗香，可见主人的珍惜之意。"
                },
                {
                    name: "一个可疑的小布袋",
                    desc: "这布袋似乎是特质的东西，无法瞧清楚这里面有什么东西，同时还有隔绝气味的功能……狗鼻子要失算了。"
                },
            ]
        }
    ],

    bad: [
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
                accept: ["府尹不紧不慢地走进来，神色如常道：“如今世道纷乱，少侠谨慎些也是应当的。”", "府尹摩挲了一下玉扳指，颔首向少年道谢。……然后径直走向了少年的床位。"],
                reject: ["门外传来一声轻笑，听不出情绪。“也罢，那少侠自己可要想清楚利害关系。”"]
            },
            outcomes: [
                "昨夜并不安稳，总感觉被人掐着下巴喂了什么却醒不过来……是什么呢？",
            ],
            items: [
                {
                    name: "名贵面脂",
                    desc: "由珍稀的药材制成，质地细腻，香气扑鼻。"
                },
                {
                    name: "瓷瓶",
                    desc: "小巧的瓷瓶，微微散发着清香，瓶身上刻着……七日……什么丸？。"
                },
                {
                    name: "印信",
                    desc:  "一枚雕刻精细的印信，在月光下泛着淡淡的光泽，似乎是全新的。"
                },
                {
                    name: "扳指",
                    desc: "卸下来没有带在手上的玉版纸。看起来价格不菲，但是沾上了什么鲜红粘稠的液体。"
                },
                {
                    name: "公文卷宗",
                    desc: "一卷写满政务的皮质卷宗，记录了一些案件和政务。真敬业呀……"
                }
            ]
        },
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
                accept: ["贵公子模样的人也不客气，径直路过了少年，他的模样称得上清秀，几乎要让人放下防备，不过人人皆可貌相否？"],
                reject: ["门口传来“嘭”的一声响，再从窗口看去，只有一些烟尘，和烟尘底下隐约可见的一张符纸。"]
            },
            outcomes: [
            ],
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
                "少侠，夜深露重了，不知可否借此处歇脚？"
            ],
            reactions: {
                accept: ["贵公子模样的人进来后，对着少年眯着眼睛笑了笑：“该怎么报答你呢……恩人？”"],
                reject: ["“真可惜”门口的人似乎耸了耸肩，转身离开了，在他走后，少年打开门，发现了一小串梅花状的脚印，通向廊外草丛。"]
            },
            outcomes: [
            ],
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
                "少侠，夜深露重了，不知可否借此处歇脚？"
            ],
            reactions: {
                accept: ["贵公子模样的人进来后，忽然靠得很近，近到少年耳畔听到笑意中掺杂着的嘶嘶声。"],
                reject: ["“唉，这世道...”门口的人似乎耸了耸肩，转身离开了，在他走后，少年打开门，在地上拾起了一小片晶莹的蛇鳞。"]
            },
            outcomes: [
                "昨夜并不安稳，少年动了动手指……等等，好像还摸到了什么东西……是几颗还残留着水渍的蛋。",
            ],
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
        },
        {
            identity: "战损武将？",
            appearance: ["看起来是一位受伤的将军，腿上止不住的鲜血正在流淌，面容略显沧桑但不陌生，不知道为何牵了头驴"],
            questions: {
                "你为何如此这般狼狈？": ["乱世中受伤乃常事，莫要大惊小怪……"],
                "我不相信你。": ["无礼！你怎可…罢了！爱信不信！"],
            },
            greetings: [
                "我途中遇难，负伤在身，坐骑也饥疲不堪，恳请少侠让我借宿一晚，讨些草料，若能施舍一碗热汤，更当感激不尽，朕，不，我来日定当重谢。"
            ],
            reactions: {
                accept: ["多谢少侠，来日的回报定不会让你后悔，说完拍了拍你的肩膀把驴也牵进了屋。"],
                reject: ["你…你会后悔的…武将无力地锤打了门板后伴随着驴蹄声渐行渐远，少年打开一条门缝看到一地血迹有些后悔…"]
            },
            outcomes: [
            ],
            items: [
                {
                    name: "鞭子",
                    desc: "鞭身已磨损不堪，看起来使用过度。"
                },
                {
                    name: "金疮药",
                    desc: "已经是空瓶了。"
                },
                {
                    name: "肉夹馍",
                    desc: "已经破烂如糜，不能再吃了。"
                },
                {
                    name: "匕首",
                    desc: "刀柄上镶嵌了黄金和宝石，看起来价值不菲。"
                },
            ]
        },
        {
            identity: "披裘贵客",
            appearance: ["门口站着一位相貌风致，身披毛绒裘斗的贵客。","一个披着裘衣的男子站在门口，掩在斗篷下的手小心翼翼似乎摸着肚子。","仔细一看，他的肚子似乎有一团与他气息相融的白气，这是一位已经有孕的男客。"],
            questions: {
                "你怀了孕，怎么还独身一人出来行走？": ["少侠火眼金睛，没想到看出来我已有身孕，不知可否让我进去借住一晚？"],
                "那你身上带了什么？": ["我带了夫君给我的定情信物，少侠好奇吗？（意义不明的轻笑）"],
            },
            greetings: [
                "你好？有人吗？可以让我进去借住一晚么？"
            ],
            reactions: {
                accept: ["贵客走进房门，坐在一旁备好被褥的空床位上休整，少年看见他脸色苍白，行动不便，脱下披风露出丰腴的身姿以及他肚子上鼓胀的幅度。"],
                reject: ["挺拔的身影愣了愣，四指成拳紧握了一会儿，随即卸力放松。", "“……”过了一会，听到门口的脚步声渐渐远了。"]
            },
            outcomes: [
                "夜里，少年睡得躁动却无法醒来，似烈焰焚烧在他身体的各个角落。直到有什么东西被塞入他的口中，用力吸吮，甘甜的汁露从中涌出，这才缓解了他的渴痛。只不过，第二天醒来，少年咂摸着嘴巴，发现口腔中残留着一股奶味，这便是后话了。",
            ],
            items: [
                {
                    name: "同心玉佩",
                    desc: "半件同心佩，刻着一只小狐狸，玉质柔润，看起来价值不菲，另一半似乎在别人之手。"
                },
                {
                    name: "装着东西的玉瓶",
                    desc: "一件漂亮的瓷瓶，封口用蜡封得十分完好，闻不到里面的气味。"
                },
                {
                    name: "绣花粗劣的荷包",
                    desc: "这荷包上的花纹扭曲，勉强可以看出绣的是鸳鸯，但是……怎么两只都是色彩鲜艳的雄鸟？不过这荷包鼓鼓囊囊，可见他并不缺钱。"
                },
            ]
        },
        {
            identity: "贵家小姐",
            appearance: ["门口站着一位眉眼昳丽，身材高挑的女子，她脸上戴着厚厚的纱巾，少年看不清楚她的脸色，却无端觉得这人眉眼和神态十分熟悉…有点像…少年猛的回过神，脸色烧红。","站在门口到是一个戴着面纱的女子，她的手十字交叉放在小腹上，看起来十分安静，少年从她身上嗅到熟悉的香味…有点像前几天离开开封送给某人的脂膏的气味。"],
            questions: {
                "你一介女子，怎么没有贴身侍卫护着？": ["不用少侠关心，本…本小姐会一点武，自保不成问题。"],
                "那你身上带了什么？": ["她垂下眼摸了摸行囊里的东西，回答：“总是些自保的东西，不如少侠功夫好。”"],            },
            greetings: [
                "你好？有人吗？可以让我进去借住一晚么？"
            ],
            reactions: {
                accept: ["女子走进房门，少年发现她挑了离出口最远的床榻，随即捡了被褥细细挑刺，少年斜过视线悄悄撇着她，却没想到她一下抽出一条丝绸被子垫在床板上，面色不虞地躺上去。"],
                reject: ["那个女子哼了一声，走下楼的步子一下比一下重，少年可以听出她絮絮叨叨说着什么“不识好歹”，“笨狗”之类的话语，少年人无端恶寒，记起府尹大人和丞相大人商议要事提及自己时，同有所感"]
            },
            outcomes: [
            ],
            items: [
                {
                    name: "行囊",
                    desc: "一个似乎能够装很多东西的行囊，仔细一看怎么和自己手头上的这个乾坤袋这么像呢…呃，似乎绣着人家的闺名，少年红着脸略过，还是不小心看见了一个字：“义”。"
                },
                {
                    name: "囊囊鼓鼓的布袋子",
                    desc: "里面的东西塞的太满，可以看见一只封蜡药丸要被顶出来……一时间有些好奇这是什么东西——因为它看起来分外眼熟。"
                },
                {
                    name: "装着水的皮囊",
                    desc: "“干嘛，你不用喝水我要啊！”"
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
        outcomes: template.outcomes,
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
        const badVisitors = playerChoices
            .filter(c => c.decision && c.visitor.alignment === 'bad')
            .map(c => c.visitor);

        if(badVisitors.length > 0) {
            const chosenOne = badVisitors[Math.floor(Math.random() * badVisitors.length)];
            const validOutcomes = Array.isArray(chosenOne.outcomes) ? chosenOne.outcomes : [];
            const ending = validOutcomes.length > 0
                ? validOutcomes[Math.floor(Math.random() * validOutcomes.length)]
                : "昨夜并不安稳，少年几度感到难以呼吸，又好像是溺水。动了动手指，后知后觉地感受到指尖残留着的水渍，等等，怎么连脸上也……？";
            resultText += `<p class="narration bad-ending">${ending}</p>`;
        }
    } else {
        const goodVisitors = playerChoices
            .filter(c => c.decision && c.visitor.alignment === 'good')
            .map(c => c.visitor);

        if(goodVisitors.length > 0) {
            const goodVisitors = playerChoices
                .filter(c => c.decision && c.visitor.alignment === 'good')
                .map(c => c.visitor);

            if(goodVisitors.length > 0) {
                const chosenOne = goodVisitors[Math.floor(Math.random() * goodVisitors.length)];

                const validOutcomes = Array.isArray(chosenOne.outcomes) ? chosenOne.outcomes : [];
                const ending = validOutcomes.length > 0
                    ? validOutcomes[Math.floor(Math.random()*validOutcomes.length)]
                    : "酒肆安然迎来黎明，睡醒时少年在手边摸到了一只没有线的漂亮风筝，不知此刻的风筝线又牵在谁的手心呢？";
                resultText += `<p class="narration good-ending">${ending}</p>`;
            } else {
                resultText += `<p class="narration">油灯将尽时终于重归寂静，空荡荡的客房只剩自己的呼吸声。</p>`;
            }

        }
    }

    resultText += `<button onclick="location.reload()">🔄 再历此夜</button>`;
    resultText += `</div>`;

    document.getElementById('result').innerHTML = resultText;
}

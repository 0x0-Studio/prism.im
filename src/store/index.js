import Vuex from 'vuex';
import Vue from 'vue';
import parseJsonToData from "../utils/parseJsonToData";
import dayjs from 'dayjs';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    gameState: 'writeDiary',
    end: "bad",
    data: null,
    options: [],
    npcConv: [],
    playerConv: [],
    me: [],
    dev: [],
    mom: [
      {
        _id: 1,
        indexId: 1,
        content: "儿子，我是你的妈妈，好久不见",
        senderId: 4321,
        reply: false,
        date: "July 17, 2021",
        timestamp: "19:20",
      },
      {
        _id: 2,
        indexId: 2,
        content: "儿子，妈妈很想你，什么时候可以见见你？",
        senderId: 4321,
        reply: false,
        date: "July 17, 2021",
        timestamp: "22:16",
      },
      {
        _id: 3,
        indexId: 3,
        content: "你住在哪里呀，方便说个地址吗？我去看看你。你想要什么礼物？妈妈买给你。",
        senderId: 4321,
        reply: false,
        date: "July 18, 2021",
        timestamp: "8:02",
      },
      {
        _id: 4,
        indexId: 4,
        content: "儿子？在吗？理一下妈妈",
        senderId: 4321,
        reply: false,
        date: "July 18, 2021",
        timestamp: "12:31",
      },
      {
        _id: 5,
        indexId: 5,
        content: "可以告诉妈妈你的电话号码吗？妈妈给你打个电话。",
        senderId: 4321,
        reply: false,
        date: "July 18, 2021",
        timestamp: "17:20",
      },
      {
        _id: 6,
        indexId: 6,
        content: "你爸爸最近怎么样，他身体还好吗？",
        senderId: 4321,
        reply: false,
        date: "July 18, 2021",
        timestamp: "20:17",
      },
      {
        _id: 7,
        indexId: 7,
        content:
          "你在哪工作呢？工作顺利吗？够不够钱花，不够也别害羞，记得问妈妈要。",
        senderId: 4321,
        reply: false,
        date: "July 19, 2021",
        timestamp: "10:21",
      },
      {
        _id: 8,
        indexId: 8,
        content:
          "儿子你的银行卡号是多少呀？妈妈给你转点钱，你买点你喜欢的东西。",
        senderId: 4321,
        reply: false,
        date: "July 19, 2021",
        timestamp: "11:23",
      },
      {
        _id: 9,
        indexId: 9,
        content:
          "你在哪里工作呀儿子？工作顺利吗？",
        senderId: 4321,
        reply: false,
        date: "July 19, 2021",
        timestamp: "13:20",
      },
      {
        _id: 10,
        indexId: 10,
        content:
          "妈妈已经回到XX市了，你在哪呀？妈妈请你吃饭。",
        senderId: 4321,
        reply: false,
        date: "July 20, 2021",
        timestamp: "17:45",
      },
    ],
    diary: [
      {
        title: "日记五 2021年7月21日 星期三 阳光普照",
        lock: true,
        value: "昨天狂风骤雨，今天总算放晴了。但是这一天，我想假装是你。很可惜，写这篇日记的不是本人，而是他的妈妈了。我尽量平复情绪，平静地说清楚。\n我的儿子，昨天在下班回家路上被车撞倒，抢救无效去世了......知道消息后，我从外地赶了过来。\n也许我的儿子，他在日记里提过我。我想说，我在外地过得很苦，不是抛弃家庭，更没有去重组家庭，我真的想为家里多赚些钱。孩子他爸很早以前因为意外残疾了，他说他不想拖累我们，脾气也因此越变越差。我希望他不要放弃，我可以陪着他。但是无论我怎么说都没用，他一直推开我，让我找个健全的男人重新过上好日子。\n可是爱就是爱，我不会因为他残疾了而放弃他，放弃我的儿子。\n有一天，孩子他爸说，你要真想为了这个家，你就尝试去繁华的城市闯闯，赚点钱回来，你不是一直想去那看看吗？对不起，我现在肯定没办法陪你。你去吧，家这边我来照顾就行了。\n\n我答应了，我想，出去多赚点钱也是好事。\n\n但是，等我到了外地，家里电话打不通，我很害怕......等我有空回家的时候，发现他和我儿子早已搬走。\n我打听不到他们的消息。我被骗了。\n我也是傻，一直尝试自己找。后来实在不行才找警察帮忙，可是孩子估计发育飞快，就不是当初描述的样子了。\n可能还是我不够坚定吧，毕竟我被孩子他爸狠狠地推开过......\n\n我一直尝试联系我的儿子，他爱写日记，我知道，从小就是这样，写在本子上。我也从未看过他的日记，尊重他的隐私。所以我想，也许等到他长大了，他还是会接着写。后来我知道“棱镜”这个网站，还真的找到了他。我给他发消息，但是他不回复我，就算是他在线，他也不回复我。我不知道他看了没有，我很着急，我希望他好好听我解释。\n\n后来有人告诉我，有个人可能是你的儿子，因为他家里有个残疾的父亲。大概住在哪也知道。我就立刻启程过去，在那附近等候和寻找，也就是昨天。\n\n我看到他的身影，我有直觉，他应该就是我的儿子！雨下得很大，他在雨中奔跑。\n大货车开了过来，我恨我自己的犹豫，没有立刻叫住他，哪怕只是一声“喂”。也许这样可以让他停下来。\n我眼看着自己的儿子被车撞倒...然后车轮碾过他的身体...\n\n孩子他爸，因为你的一意孤行，你推开了我和我的儿子。但我告诉我自己，这是意外，我恨不得你。\n但我恨我自己。\n\n祝好，我的儿子。你小时候不是问过我，人死后会上天堂还是下地狱吗？妈妈肯定的告诉你，一定是天堂。起码你一定是。\n帮你写的最后一篇日记\n爱你的——妈妈"
      },
      {
        title: "日记四 2021年7月20日 星期二 阴雨连绵",
        lock: true,
        value: "7月20日 星期二 雨\n今天下雨了，雨很大。说实话，我越来越感觉到无力，我只身一人在这个城市闯荡，我很难感受到被关心的感觉。突然有点想我妈，虽然她很多年前就已经抛弃我们，去另外一个新的地方，也可能已经组建了新的家庭，无所谓了。还是那块心结......想起来，前段时间她通过棱镜网站关注了我，并时不时发信息给我。我心情有些复杂，关于她的近况，我一条信息都没看，也不敢去了解，我也不知道跟她说什么，等一阵子再跟她好好聊聊吧......其实我有些气愤，她是以为我已经忘记她抛弃我们的这件事吗？有点可笑，突然联系我是怎么一回事？我永远都记得她走的那一天，没有喧嚣、没有争吵，很平静。早上起床准备去上学，发现在做早饭的不是妈妈，而是爸爸。爸爸他做早餐笨手笨脚的，熬了白粥、煎了两个太阳蛋生怕我不够吃，还开了包榨菜给我，生怕我喝粥不够味道下不去肚子。\n我没有太在意妈妈不见了的这件事，我想，她是不是有事情做？真的没有多想，那天就开开心心上学。但放学时候也反常起来，平时是母亲来接我放学，那天接我的是父亲，可是我想亲口告诉她，你离开我们那天，我是学校的升旗手。我问爸爸，妈妈去哪了？一开始爸爸说，妈妈去外地工作了，想多赚些钱给我买玩具，我相信，我知道玩具很贵，因为我总是路过玩具店时赖着妈妈，让她给我买。她都拽着我，不让我买。\n妈妈，你什么时候回来给我买玩具啊？\n我等啊等，等到我长大了，再也不需要玩具了，你还是没回来。\n后来爸爸直接告诉我了，妈妈不要我们了，妈妈抛弃我们了。\n到底是什么原因你要离开呢？我知道你和爸爸经常打架，打得很凶。你们吵起架来就从来不做饭给我吃，可是我好饿。我就假装自己会做饭。现在想起来还挺搞笑的，我居然把煤球放进炒菜锅里翻炒......你们都不知道，还以为我贪玩，把煤球放进去。还动手打我。\n不过说实话，真的挺好玩的。\n小时候动手能力真的很差，现在好多了，我一个人在外面，会自己做饭吃了。嘻嘻嘻嘻......\n难过的是，很久以前我爸也因为意外残疾了。我真的需要扛起这个家。加油！等有钱了我要给爸爸买个好轮椅，电动的，这样他就不会这么累了。\n\n回忆太多，明明是写日记，怎么就成回忆录了。这些记忆串联起来，加上现在自己在外打工过得也不怎么好，晚上难免有感而发。\n\n进入正题，今天他娘的因为迟到，被老板扣工资了。我的天，就两分钟都不放过我吗？我已经起的很早了，每天起早为的就是能拿到公司的全勤奖。说出来可能没人相信，今天是因为地铁堵了才迟到的，而且堵了一个小时左右，不知道哪个人又把鞋子啊、整个脚啊啥的卡地铁里去了，这人也挺背的。老板压根就不信我说的，工资照扣，搞得我一整天都在惦记着这被扣的钱，把每月工资按天平均算下来，完了，今天又白干了，甚至后面两天也白干了。我惦记啊惦记啊，今天的工作也没做好，被组长臭骂了一顿。不过也有原因是我在上班时间在这写了日记。\n\n下班后居然还下雨了，还好我带了伞。但是我看到了我喜欢的那个女生——同公司的一个女生，她因为没带伞，在公司楼下等雨停。我就把伞给她了。她是个很漂亮的女孩子，我觉得值得我这样去做。兴许明天她还伞给我的时候，还会跟我聊聊天，说声谢谢，但是也足够了。不过她一定不会喜欢我吧，我很普通，也没钱，什么都很平庸。\n然后我冒着雨冲去坐地铁。下了地铁后，雨还在下，而且越下越大，我冲出地铁口。雨滴模糊了我的眼镜，我看不清路，我差点被一辆大货车撞了！还好在那一瞬间，我听到有个女人在背后喊了声：“喂！”。我才停下脚步，幸免于难，不然我真的死了。\n\n现在想想真的很感谢那个喊了句喂的人，不过可能她不是在跟我说话。反正效果一样，算是救了我一命。\n",
      },
      {
        title: "日记五 2021年7月21日 星期三 阳光普照",
        lock: false,
        value: "今天太多奇妙的事了。昨天老板说扣我工资，今天却取消了对我的处罚，感谢老板。\n回想昨天的事，太惊险了，还好命没丢，一切都应该好好过下去。人生最美好的词汇就是虚惊一场。\n但是我还是不知道怎么面对我的妈妈......",
      },
      {
        title: "日记三 2021年7月19日 星期一 乌云密布",
        lock: false,
        value: "太让人生气了，为什么今天旺财这么不乖，它把我的玻璃杯推到了地上，摔碎在地上。\n我知道它想引起我的注意，让我陪它玩。但是我真的太忙了，晚上回到家还要加班。老板说，明天的视频必须要剪出来。该死，我左右为难，因为这个视频需要在会议上展出。有本事让隔壁部门找个人剪啊！欺负我们视频部门是几个意思。\n可是旺财真的太可爱了，我不舍得去骂它，吸溜吸溜，它的肚子真的太软了，好好摸。等我忙完再陪你玩好不好~"
      },
      {
        title: "日记二 2021年7月18日 星期日 阳光充足",
        lock: false,
        value: "父亲的身体又开始不好了，他说他有只手没什么力气，只能一只手推轮椅，行动起来慢了许多……\n妈妈又在网站上发了几条信息给我，我不敢看，到底要不要回呢？很烦。\n今天周末，又被同事邀请出去喝酒了，身不由己，部门领导要求所有人都要去。但我真的不喜欢喝酒，什么玩意啊，酒太难喝了，为什么这么多人喜欢喝？还不如喝杯柠檬茶，我能在饮料店坐上半天，看看书，听听音乐，贼爽。明天下班一定要喝一杯。"
      },
      {
        title: "日记一 2021年7月17日 星期六 阳光明媚",
        lock: false,
        value: "周六本应该也算是休息，法定休息日好吗！为什么又要加班！\n越想越难受，这周本来有我的生日，结果因为是工作日，要上班，生日聚会的机会都没有，而且还加班了。\n就我一个人在干，我太拼了，可是领导压根就不知道我的辛苦，他以为剪视频就像写流水账这么简单？？真就不把人当人。\n今天有正事要说，我妈妈，对，就是那个抛弃了我的妈妈，她发消息给我了。突然脑子一片混乱，她怎么有脸来找我的啊？她能不能自己跟那个家庭的人好好过？别来烦我，我不想了解她的近况！我不想知道关于她的任何东西！"
      },
      {
        title: "日记四 2021年7月20日 星期二 阴雨连绵",
        lock: true,
        value: "今天下雨了，雨很大。说实话，我越来越感觉到无力，我只身一人在这个城市闯荡，我很难感受到被关心的感觉。突然有点想我妈，虽然她很多年前就已经抛弃我们，去另外一个新的地方，也可能已经组建了新的家庭，无所谓了。还是那块心结......想起来，前段时间她通过棱镜网站关注了我，并时不时发信息给我。我心情有些复杂，关于她的近况，我一条信息都没看，也不敢去了解，我也不知道跟她说什么，等一阵子再跟她好好聊聊吧......其实我有些气愤，她是以为我已经忘记她抛弃我们的这件事吗？有点可笑，突然联系我是怎么一回事？我永远都记得她走的那一天，没有喧嚣、没有争吵，很平静。早上起床准备去上学，发现在做早饭的不是妈妈，而是爸爸。爸爸他做早餐笨手笨脚的，熬了白粥、煎了两个太阳蛋生怕我不够吃，还开了包榨菜给我，生怕我喝粥不够味道下不去肚子。\n我没有太在意妈妈不见了的这件事，我想，她是不是有事情做？真的没有多想，那天就开开心心上学。但放学时候也反常起来，平时是母亲来接我放学，那天接我的是父亲，可是我想亲口告诉她，你离开我们那天，我是学校的升旗手。我问爸爸，妈妈去哪了？一开始爸爸说，妈妈去外地工作了，想多赚些钱给我买玩具，我相信，我知道玩具很贵，因为我总是路过玩具店时赖着妈妈，让她给我买。她都拽着我，不让我买。\n妈妈，你什么时候回来给我买玩具啊？\n我等啊等，等到我长大了，再也不需要玩具了，你还是没回来。\n后来爸爸直接告诉我了，妈妈不要我们了，妈妈抛弃我们了。\n到底是什么原因你要离开呢？我知道你和爸爸经常打架，打得很凶。你们吵起架来就从来不做饭给我吃，可是我好饿。我就假装自己会做饭。现在想起来还挺搞笑的，我居然把煤球放进炒菜锅里翻炒......你们都不知道，还以为我贪玩，把煤球放进去。还动手打我。\n不过说实话，真的挺好玩的。\n小时候动手能力真的很差，现在好多了，我一个人在外面，会自己做饭吃了。嘻嘻嘻嘻......\n难过的是，很久以前我爸也因为意外残疾了。我真的需要扛起这个家。加油！等有钱了我要给爸爸买个好轮椅，电动的，这样他就不会这么累了。\n回忆太多，明明是写日记，怎么就成回忆录了。这些记忆串联起来，加上现在自己在外打工过得也不怎么好，晚上难免有感而发。\n进入正题，今天他娘的因为迟到，被老板扣工资了。我的天，就两分钟都不放过我吗？我已经起的很早了，每天起早为的就是能拿到公司的全勤奖。说出来可能没人相信，今天是因为地铁堵了才迟到的，而且堵了一个小时左右，不知道哪个人又把鞋子啊、整个脚啊啥的卡地铁里去了，这人也挺背的。老板压根就不信我说的，工资照扣，搞得我一整天都在惦记着这被扣的钱，把每月工资按天平均算下来，完了，今天又白干了，甚至后面两天也白干了。我惦记啊惦记啊，今天的工作也没做好，被组长臭骂了一顿。不过也有原因是我在上班时间在这写了日记。\n嘿嘿，下班了，回去再写，晚上再上传吧。",
      },
    ],
    rooms: [
      {
        roomId: 1,
        roomName: "Me",
        roomDesc: "24岁了，对自己好点",
        avatar:
          "/me.jpeg",
        unreadCount: 0,
        index: 3,
        users: [
          {
            _id: 5678,
            username: "shadow",
            avatar: "assets/imgs/snow.png",
            status: {
              state: "online",
              lastChanged: "14 July, 20:00",
            },
          },
          {
            _id: 1234,
            username: "Me",
            avatar: "assets/imgs/snow.png",
            status: {
              state: "online",
              lastChanged: "21 July, 20:00",
            },
          },
        ]
      },
      {
        roomId: 2,
        roomName: "妈妈",
        roomDesc: "怀念电子厂的工号611976，有家人在一起的时光。",
        avatar:
          "/mom.jpeg",
        unreadCount: 0,
        index: 3,
        users: [
          {
            _id: 1234,
            username: "Me",
            avatar: "assets/imgs/doe.png",
            status: {
              state: "online",
              lastChanged: "today, 14:30",
            },
          },
          {
            _id: 4321,
            username: "妈妈",
            avatar: "assets/imgs/snow.png",
            status: {
              state: "offline",
              lastChanged: "20 July, 19:20",
            },
          },
        ],
      },
      {
        roomId: 3,
        roomName: "PRISM.IM 开发者",
        roomDesc: "0x0",
        avatar: "/dev.png",
        unreadCount: 0,
        index: 3,
        users: [
          {
            _id: 1234,
            username: "Me",
            avatar: "assets/imgs/doe.png",
            status: {
              state: "online",
              lastChanged: "today, 14:30",
            },
          },
          {
            _id: 1984,
            username: "PRISM.IM 开发者",
            avatar: "assets/imgs/snow.png",
            status: {
              state: "offline",
              // lastChanged: "14 July, 20:00",
            },
          },
        ],
      }
    ]
  },
  mutations: {
    init(state) {
      state.data = parseJsonToData();
      this.npcConv = state.data.npc;
      this.playerConv = state.data.player;
    },
    setEnd(state, payload) {
      state.end = payload;
    },
    unlockDiary(state, payload) {
      state.diary[payload].lock = false;
    },
    setGameState(state, payload) {
      state.gameState = payload;
      switch (state.gameState) {
        case "chatStart":
          this.commit("init");
          this.commit("roll", 0);
          break;
        default:
          break;
      }
    },
    setMe(state, payload) {
      state.me = payload;
    },
    setDev(state, payload) {
      state.dev = payload;
    },
    roll(state, k) {
      return new Promise((resolve) => {
        switch (state.gameState) {
          case 'asked':
            resolve("2.4.1");
            state.gameState = 'diaryYesterday';
            break;
          default:
            var time = 0;
            var unullCount = 0;
            for (let j in this.npcConv[k]) {
              if (this.npcConv[k][j] !== 0) {
                unullCount++;
              }
            }
            console.log(unullCount)
            for (let i in this.npcConv[k]) {
              if(this.npcConv[k][i] !== 0) {
                time += this.npcConv[k][i].body.length * 150;
                setTimeout(() => {
                  state.me.push({
                    _id: this.npcConv[k][i].id,
                    indexId: this.npcConv[k][i].id,
                    content: `*_${this.npcConv[k][i].body}_*`,
                    senderId: 1234,
                    reply: false,
                    date: "21 July",
                    timestamp: dayjs().format("HH:mm"),
                    to: this.npcConv[k][i].to,
                  })
                  if (parseInt(i) === unullCount - 1) {
                    if (this.npcConv[k][i].id === '1.4.1') {
                      resolve('needAsk');
                    } else if (this.npcConv[k][i].id === '1.34.5') {
                      if (state.diary[0].lock || state.diary[1].lock) {
                        state.end = "bad";
                        resolve(this.npcConv[k][i].to);
                      } else {
                        state.end = "good";
                        resolve("goodEnd");
                      }
                    }
                    resolve(this.npcConv[k][i].to);
                  }
                }, time); 
              }
            }
            break;
        }
      }).then((result) => {
        if (result === 'needAsk') {
          this.commit("setGameState", "ask");
        } else if (result === 'goodEnd') {
          setTimeout(() => {
            state.options = [];
            state.options.push({
              key: '-1.-1.-1',
              to: '',
              value: "谢谢你",
            });
          }, 1000);
        } else {
          const toPlayerSection = parseInt(result.split(".")[1] - 1);
          setTimeout(() => {
            state.options = [];
            for (let j in this.playerConv[toPlayerSection]) {
              if (this.playerConv[toPlayerSection][j] !== 0) {
                state.options.push({
                  key: this.playerConv[toPlayerSection][j].id,
                  to: parseInt(this.playerConv[toPlayerSection][j].to.split(".")[1]),
                  value: this.playerConv[toPlayerSection][j].body,
                });
              }
            }
          }, 1000);
        }
      });
    },
  }
})

export default store;
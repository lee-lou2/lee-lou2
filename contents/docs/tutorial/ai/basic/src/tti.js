import React from 'react';
import styles from './tti.module.css';


const data = {
  '품질': [
    {
      'prompt': '4k',
      'description': '4k 해상도'
    },
    {
      'prompt': 'best quality',
      'description': '최고 퀄리티'
    },
    {
      'prompt': 'detailed',
      'description': '세세하게 묘사'
    },
    {
      'prompt': 'finely detailed',
      'description': '세세하게'
    },
    {
      'prompt': 'beautiful eyes and detailed',
      'description': '아름다운 눈과 디테일'
    },
    {
      'prompt': 'face',
      'description': '얼굴'
    },
    {
      'prompt': 'high quality',
      'description': '높은 퀄리티'
    },
    {
      'prompt': 'highres<br />high resolution',
      'description': '높은 해상도'
    },
    {
      'prompt': 'high resolution illustration',
      'description': '고해상도 삽화'
    },
    {
      'prompt': 'hyper detail<br />super detail',
      'description': '높은 디테일'
    },
    {
      'prompt': 'intricate details',
      'description': '섬세한 디테일'
    },
    {
      'prompt': 'lustrous skin',
      'description': '윤기나는 피부'
    },
    {
      'prompt': 'masterpiece',
      'description': '걸작'
    },
    {
      'prompt': 'portrait',
      'description': '초상화'
    },
    {
      'prompt': 'sidelighting',
      'description': '측면조명'
    },
    {
      'prompt': 'UHD',
      'description': '울트라 HD'
    }
  ],
  '구도': [
    {
      'prompt': 'at <*특정 대상>',
      'description': '*에게'
    },
    {
      'prompt': 'away<br />afar',
      'description': '저 멀리'
    },
    {
      'prompt': 'back',
      'description': '뒤'
    },
    {
      'prompt': 'down',
      'description': '아래'
    },
    {
      'prompt': 'front',
      'description': '앞'
    },
    {
      'prompt': 'outside',
      'description': '바깥'
    },
    {
      'prompt': 'side',
      'description': '옆'
    },
    {
      'prompt': 'up',
      'description': '위'
    },
    {
      'prompt': 'focus on <*신체부위나 물체,방향>',
      'description': '초점을 *에'
    },
    {
      'prompt': 'action',
      'description': '액션'
    },
    {
      'prompt': 'dynamic angle',
      'description': '역동적인 각도'
    },
    {
      'prompt': 'dynamic pose',
      'description': '역동적인 포즈'
    },
    {
      'prompt': 'eye contact',
      'description': '시점을 눈에'
    },
    {
      'prompt': 'facial',
      'description': '얼굴에 집중됨'
    },
    {
      'prompt': 'from below',
      'description': '아래에서'
    },
    {
      'prompt': 'from above',
      'description': '위에서'
    },
    {
      'prompt': 'from forward',
      'description': '앞에서'
    },
    {
      'prompt': 'from behind',
      'description': '뒤에서'
    },
    {
      'prompt': 'looking <*신체,물체,방향><br />through *',
      'description': '시점을 *에'
    },
    {
      'prompt': 'cowboy shot<br />face through thighs',
      'description': '얼굴~허벅지만'
    },
    {
      'prompt': 'facial<br />face only',
      'description': '얼굴만'
    },
    {
      'prompt': 'feet out of frame<br />face to below knee',
      'description': '얼굴~발목만'
    },
    {
      'prompt': 'full body<br />whole body',
      'description': '전신'
    },
    {
      'prompt': 'lower<br />body',
      'description': '하체(상체~하체)'
    },
    {
      'prompt': 'headshot<br />head only',
      'description': '머리만'
    },
    {
      'prompt': 'upper body<br />face through torso',
      'description': '상체(얼굴~몸통)'
    },
    {
      'prompt': 'wide shot<br />whole body from far away',
      'description': '멀리서 전신'
    }
  ],
  '효과': [
    {
      'prompt': '(series name)<br />fine art parody={*}<br />style parody={*}',
      'description': '해당 작품 느낌'
    },
    {
      'prompt': '**s-anime-aesthetic',
      'description': '**년대 애니메이션 스타일'
    },
    {
      'prompt': 'acrylic paint',
      'description': '아크릴물감'
    },
    {
      'prompt': 'airbrush',
      'description': '에어브러시'
    },
    {
      'prompt': 'american cartoon',
      'description': '미국카툰'
    },
    {
      'prompt': 'american comics',
      'description': '미국만화'
    },
    {
      'prompt': 'animation<br />anime art style<br />japanese animation',
      'description': '애니메이션'
    },
    {
      'prompt': 'anime screencap',
      'description': '애니메이션 캡쳐'
    },
    {
      'prompt': 'arcanepunk',
      'description': '아케인펑크'
    },
    {
      'prompt': 'art deco',
      'description': '아르데코'
    },
    {
      'prompt': 'art nouveau',
      'description': '아르누보'
    },
    {
      'prompt': 'ballpoint pen',
      'description': '볼펜'
    },
    {
      'prompt': 'baroque',
      'description': '바로크'
    },
    {
      'prompt': 'brush',
      'description': '브러시'
    },
    {
      'prompt': 'calligraphy brush',
      'description': '서예붓'
    },
    {
      'prompt': 'canvas',
      'description': '캔버스'
    },
    {
      'prompt': 'cartoon realistic<br />cartoon photorealistic',
      'description': '미국풍 실사체'
    },
    {
      'prompt': 'cartoon<br />cartoon network<br />calarts style',
      'description': '카툰'
    },
    {
      'prompt': 'chalk',
      'description': '분필'
    },
    {
      'prompt': 'charcoal',
      'description': '숯'
    },
    {
      'prompt': 'color ink',
      'description': '색 잉크'
    },
    {
      'prompt': 'colored pencil',
      'description': '색연필'
    },
    {
      'prompt': 'coupy pencil',
      'description': '플라스틱연필'
    },
    {
      'prompt': 'crayon',
      'description': '크레용'
    },
    {
      'prompt': 'cyberpunk',
      'description': '사이버펑크'
    },
    {
      'prompt': 'dark fantasy',
      'description': '다크판타지'
    },
    {
      'prompt': 'dieselpunk',
      'description': '디젤펑크'
    },
    {
      'prompt': 'disney',
      'description': '디즈니'
    },
    {
      'prompt': 'fantasy',
      'description': '판타지'
    },
    {
      'prompt': 'faux traditional media',
      'description': '가짜손그림'
    },
    {
      'prompt': 'flat color',
      'description': '음영이 단순해짐'
    },
    {
      'prompt': 'game cg',
      'description': '게임 cg'
    },
    {
      'prompt': 'gothic fantasy',
      'description': '고딕판타지'
    },
    {
      'prompt': 'gouache',
      'description': '구아슈'
    },
    {
      'prompt': 'graphic novel',
      'description': '그래픽노벨'
    },
    {
      'prompt': 'graphite',
      'description': '흑연'
    },
    {
      'prompt': 'high contrast',
      'description': '고대비'
    },
    {
      'prompt': 'high saturation',
      'description': '고채도'
    },
    {
      'prompt': 'impressionism',
      'description': '인상주의'
    },
    {
      'prompt': 'ink',
      'description': '잉크'
    },
    {
      'prompt': 'ligne claire',
      'description': '선이 명확한'
    },
    {
      'prompt': 'manga realistic<br />manga photorealistic',
      'description': '일본풍 실사체'
    },
    {
      'prompt': 'marker',
      'description': '마커'
    },
    {
      'prompt': 'millipen',
      'description': '밀리펜'
    },
    {
      'prompt': 'minimalism',
      'description': '미니멀리즘'
    },
    {
      'prompt': 'monochrome',
      'description': '흑백그림'
    },
    {
      'prompt': 'nib pen',
      'description': '펜촉'
    },
    {
      'prompt': 'oil painting',
      'description': '유화'
    },
    {
      'prompt': 'painting',
      'description': '회화'
    },
    {
      'prompt': 'pastel',
      'description': '파스텔'
    },
    {
      'prompt': 'pixel art',
      'description': '도트'
    },
    {
      'prompt': 'pixiv',
      'description': '픽시브'
    },
    {
      'prompt': 'poster',
      'description': '포스터'
    },
    {
      'prompt': 'realistic<br />semi realistic',
      'description': '실사체<br />반실사체'
    },
    {
      'prompt': 'renaissance',
      'description': '르네상스'
    },
    {
      'prompt': 'rococo',
      'description': '로코코'
    },
    {
      'prompt': 'romance fantasy',
      'description': '로맨스판타지'
    },
    {
      'prompt': 'romanticism',
      'description': '낭만주의'
    },
    {
      'prompt': 'shonen manga',
      'description': '소년만화'
    },
    {
      'prompt': 'sketch',
      'description': '스케치'
    },
    {
      'prompt': 'steampunk',
      'description': '스팀펑크'
    },
    {
      'prompt': 'sumi-e',
      'description': '수묵화'
    },
    {
      'prompt': 'surreal',
      'description': '초현실주의'
    },
    {
      'prompt': 'traditional media',
      'description': '손 그림'
    },
    {
      'prompt': 'ukiyo-e',
      'description': '우키요에'
    },
    {
      'prompt': 'unfinished',
      'description': '러프'
    },
    {
      'prompt': 'urban fantasy',
      'description': '어반판타지'
    },
    {
      'prompt': 'watercolor',
      'description': '수채화'
    },
    {
      'prompt': 'watercolor pencil',
      'description': '수채화연필'
    }
  ],
  '색깔': [
    {
      'prompt': 'black',
      'description': '검은색'
    },
    {
      'prompt': 'blue',
      'description': '파란색'
    },
    {
      'prompt': 'brown',
      'description': '갈색'
    },
    {
      'prompt': 'colorful',
      'description': '다채로운'
    },
    {
      'prompt': 'dark',
      'description': '어두운색'
    },
    {
      'prompt': 'gold<br />golden',
      'description': '황금색'
    },
    {
      'prompt': 'gradient',
      'description': '그라데이션'
    },
    {
      'prompt': 'gray',
      'description': '회색'
    },
    {
      'prompt': 'green',
      'description': '초록색'
    },
    {
      'prompt': 'green-tinted eyewear',
      'description': '연녹색'
    },
    {
      'prompt': 'light',
      'description': '밝은색'
    },
    {
      'prompt': 'amber',
      'description': '호박색'
    },
    {
      'prompt': 'light green',
      'description': '연두색'
    },
    {
      'prompt': 'multicolored',
      'description': '여러 색깔'
    },
    {
      'prompt': 'orange',
      'description': '주황색'
    },
    {
      'prompt': 'pink',
      'description': '분홍색'
    },
    {
      'prompt': 'purple',
      'description': '보라색'
    },
    {
      'prompt': 'rainbow',
      'description': '무지개색'
    },
    {
      'prompt': 'red',
      'description': '빨강색'
    },
    {
      'prompt': 'sky blue',
      'description': '하늘색'
    },
    {
      'prompt': 'split-color',
      'description': '분열된 색'
    },
    {
      'prompt': 'streaked',
      'description': '줄무늬 있는'
    },
    {
      'prompt': 'two-tone',
      'description': '투 톤'
    },
    {
      'prompt': 'white',
      'description': '흰색'
    },
    {
      'prompt': 'yellow',
      'description': '노란색'
    },
    {
      'prompt': 'yellow-tinted eyewear',
      'description': '연노란색'
    }
  ],
  '신체': [
    {
      'prompt': 'hair',
      'description': '머리카락'
    },
    {
      'prompt': 'head',
      'description': '머리'
    },
    {
      'prompt': 'forehead',
      'description': '이마'
    },
    {
      'prompt': 'ears',
      'description': '귀'
    },
    {
      'prompt': 'eye',
      'description': '눈'
    },
    {
      'prompt': 'eyelid',
      'description': '눈매'
    },
    {
      'prompt': 'eyelashes',
      'description': '속눈썹'
    },
    {
      'prompt': 'pupils',
      'description': '눈동자'
    },
    {
      'prompt': 'cheek',
      'description': '뺨'
    },
    {
      'prompt': 'chin',
      'description': '턱'
    },
    {
      'prompt': 'shoulder',
      'description': '어깨'
    },
    {
      'prompt': 'arm',
      'description': '팔'
    },
    {
      'prompt': 'forearm',
      'description': '손목부터 팔꿈치까지'
    },
    {
      'prompt': 'elbow',
      'description': '팔꿈치'
    },
    {
      'prompt': 'tits<br />stomach',
      'description': '복부'
    },
    {
      'prompt': 'thigh',
      'description': '허벅지'
    },
    {
      'prompt': 'knee',
      'description': '무릎'
    },
    {
      'prompt': 'calf',
      'description': '종아리'
    },
    {
      'prompt': 'foot',
      'description': '발'
    },
    {
      'prompt': 'mole',
      'description': '점'
    },
  ],
  '얼굴': [
    {
      'prompt': 'blanked eyes',
      'description': '동태눈'
    },
    {
      'prompt': 'blush',
      'description': '홍조,부끄러운 표정'
    },
    {
      'prompt': 'crying',
      'description': '우는얼굴'
    },
    {
      'prompt': 'crying with eyes open',
      'description': '눈뜬 우는얼굴'
    },
    {
      'prompt': 'drooling',
      'description': '침 흘리는'
    },
    {
      'prompt': 'empty eyes',
      'description': '레이프눈'
    },
    {
      'prompt': 'heart in pupils',
      'description': '눈동자의 하트'
    },
    {
      'prompt': 'open mouth',
      'description': '입 벌림'
    },
    {
      'prompt': 'smile',
      'description': '미소'
    },
    {
      'prompt': 'tears',
      'description': '눈물'
    },
    {
      'prompt': 'angry face',
      'description': '화난 표정'
    },
    {
      'prompt': 'applying makeup',
      'description': '화장하다'
    },
    {
      'prompt': 'aroused face',
      'description': '흥분한 표정'
    },
    {
      'prompt': 'arrogant face',
      'description': '오만한 표정'
    },
    {
      'prompt': 'benevolent face',
      'description': '자비로운 표정'
    },
    {
      'prompt': 'boring face',
      'description': '지루한 표정'
    },
    {
      'prompt': 'bright face',
      'description': '해맑은 표정'
    },
    {
      'prompt': 'charmed face',
      'description': '매혹한 표정'
    },
    {
      'prompt': 'confused face',
      'description': '혼란한 표정'
    },
    {
      'prompt': 'crazy face',
      'description': '미친 표정'
    },
    {
      'prompt': 'crying face',
      'description': '우는 표정'
    },
    {
      'prompt': 'desired face',
      'description': '희망한 표정'
    },
    {
      'prompt': 'despair face',
      'description': '절망한 표정'
    },
    {
      'prompt': 'determined face',
      'description': '단호한 표정'
    },
    {
      'prompt': 'disappointed face',
      'description': '실망한 표정'
    },
    {
      'prompt': 'distressed face',
      'description': '괴로운 표정'
    },
    {
      'prompt': 'drunk face',
      'description': '취한 표정'
    },
    {
      'prompt': 'earnest face',
      'description': '간절한 표정'
    },
    {
      'prompt': 'easygoing face',
      'description': '느긋한 표정'
    },
    {
      'prompt': 'ecstasy face',
      'description': '황홀한 표정'
    },
    {
      'prompt': 'embarrassed face',
      'description': '당황한 표정'
    },
    {
      'prompt': 'envious face',
      'description': '부러운 표정'
    },
    {
      'prompt': 'evil face',
      'description': '사악한 표정'
    },
    {
      'prompt': 'expression face',
      'description': '무표정한 표정'
    },
    {
      'prompt': 'frightened face',
      'description': '질겁한 표정'
    },
    {
      'prompt': 'frustrated face',
      'description': '좌절한 표정'
    },
    {
      'prompt': 'gentle face',
      'description': '상냥한 표정'
    },
    {
      'prompt': 'giddy face',
      'description': '들뜬 표정'
    },
    {
      'prompt': 'gloomy face',
      'description': '암울한 표정'
    },
    {
      'prompt': 'happy face',
      'description': '기쁜 표정'
    },
    {
      'prompt': 'idea face',
      'description': '생각한 표정'
    },
    {
      'prompt': 'irritating face',
      'description': '짜증난 표정'
    },
    {
      'prompt': 'joyful face',
      'description': '즐거운 표정'
    },
    {
      'prompt': 'lamented face',
      'description': '한탄한 표정'
    },
    {
      'prompt': 'light face',
      'description': '가벼운 표정'
    },
    {
      'prompt': 'lonely face',
      'description': '외로운 표정'
    },
    {
      'prompt': 'miserable face',
      'description': '비참한 표정'
    },
    {
      'prompt': 'nervous face',
      'description': '초조한 표정'
    },
    {
      'prompt': 'outraged face',
      'description': '분노한 표정'
    },
    {
      'prompt': 'pale face',
      'description': '창백한 표정'
    },
    {
      'prompt': 'pathetic face',
      'description': '한심한 표정'
    },
    {
      'prompt': 'pretentious face',
      'description': '잘난 척한 표정'
    },
    {
      'prompt': 'sacred face',
      'description': '신성한 표정'
    },
    {
      'prompt': 'scary face',
      'description': '무서운 표정'
    },
    {
      'prompt': 'scoffing face',
      'description': '비웃는 표정'
    },
    {
      'prompt': 'scornful face',
      'description': '경멸한 표정'
    },
    {
      'prompt': 'serious face',
      'description': '심각한 표정'
    },
    {
      'prompt': 'shameful face',
      'description': '부끄러운 표정'
    },
    {
      'prompt': 'sleepy face',
      'description': '졸린 표정'
    },
    {
      'prompt': 'smiling face',
      'description': '웃는 표정'
    },
    {
      'prompt': 'suppressed face',
      'description': '억눌린 표정'
    },
    {
      'prompt': 'surprised face',
      'description': '놀란 표정'
    },
    {
      'prompt': 'suspicious face',
      'description': '의심한 표정'
    },
    {
      'prompt': 'tearful face',
      'description': '울먹이는 표정'
    },
    {
      'prompt': 'tired face',
      'description': '피곤한 표정'
    },
    {
      'prompt': 'touched face',
      'description': '감동한 표정'
    },
    {
      'prompt': 'turn red face',
      'description': '붉히다 표정'
    },
    {
      'prompt': 'unfair face',
      'description': '억울한 표정'
    },
    {
      'prompt': 'unfortunate face',
      'description': '불행한 표정'
    },
    {
      'prompt': 'unstable face',
      'description': '불안한 표정'
    },
    {
      'prompt': 'upset face',
      'description': '속상한 표정'
    },
    {
      'prompt': 'worried face',
      'description': '걱정한 표정'
    }
  ],
  '헤어': [
    {
      'prompt': '* hair, two-tone ** hair<br />multicolored hair with * and **',
      'description': '*과 **색의 투톤 헤어'
    },
    {
      'prompt': 'bang',
      'description': '앞머리'
    },
    {
      'prompt': 'bob hair',
      'description': '보브컷'
    },
    {
      'prompt': 'bun hair',
      'description': '똥머리, 주로 두개 생김'
    },
    {
      'prompt': 'curled up hair',
      'description': '밑단부터 말려 올라가는 머리'
    },
    {
      'prompt': 'curly hair',
      'description': '말린 머리'
    },
    {
      'prompt': 'curved bob hair',
      'description': '밑단이 말린 보브컷'
    },
    {
      'prompt': 'drill hair',
      'description': '말린 머리'
    },
    {
      'prompt': 'hair slicked back',
      'description': '뒤로 넘긴 머리'
    },
    {
      'prompt': 'hair slicked side',
      'description': '옆으로 넘긴 머리'
    },
    {
      'prompt': 'long hair',
      'description': '긴 머리카락'
    },
    {
      'prompt': 'low twintails',
      'description': '트윈테일이 낮은 위치서 생성'
    },
    {
      'prompt': 'long twist hair',
      'description': '긴 땋은머리'
    },
    {
      'prompt': 'matted hair',
      'description': '헝클어진'
    },
    {
      'prompt': 'medium hair',
      'description': '중간 길이, 어깨를 넘는 길이의 머리'
    },
    {
      'prompt': 'messy hair',
      'description': '덮수룩한 머리'
    },
    {
      'prompt': 'ponytail hair',
      'description': '포니테일'
    },
    {
      'prompt': 'rich hair',
      'description': '풍성한 머리. 웨이브 등의 스타일과 섞어쓸때 효과가 좋음'
    },
    {
      'prompt': 'shaggy hair',
      'description': '샤기컷'
    },
    {
      'prompt': 'short hair',
      'description': '짧은 머리카락'
    },
    {
      'prompt': 'shoulder length bob hair',
      'description': '어깨길이의 보브컷'
    },
    {
      'prompt': 'straight hair',
      'description': '직모'
    },
    {
      'prompt': 'twintails',
      'description': '트윈테일'
    },
    {
      'prompt': 'twin Braides',
      'description': '트윈테일 땋은머리'
    },
    {
      'prompt': 'twist hair',
      'description': '땋은머리'
    },
    {
      'prompt': 'two side up half hair',
      'description': '양쪽 반묶음 머리'
    },
    {
      'prompt': 'unkempt hair',
      'description': '정리안된 뻗친'
    },
    {
      'prompt': 'voluminous_long_hair',
      'description': '볼륨있는 롱헤어'
    },
    {
      'prompt': 'wavy hair',
      'description': '웨이브진 머리'
    },
    {
      'prompt': 'updo hair',
      'description': '올림 머리'
    }
  ],
  '의상': [
    {
      'prompt': 'baseball uniform',
      'description': '야구선수 의상'
    },
    {
      'prompt': 'bathrobe',
      'description': '가운'
    },
    {
      'prompt': 'blue denim jacket',
      'description': '청자켓'
    },
    {
      'prompt': 'bomber jacket',
      'description': '항공점퍼'
    },
    {
      'prompt': 'cardigan',
      'description': '가디건'
    },
    {
      'prompt': 'cargo pants',
      'description': '카고바지'
    },
    {
      'prompt': 'Chest rig',
      'description': '군용조끼 (탄입대 앞으로 몰려있음)'
    },
    {
      'prompt': 'dress uniform',
      'description': '군인 정복'
    },
    {
      'prompt': 'duffel coat',
      'description': '떡볶이 코트'
    },
    {
      'prompt': 'elbow gloves',
      'description': '팔토시'
    },
    {
      'prompt': 'epaulettes',
      'description': '견장'
    },
    {
      'prompt': 'gloves',
      'description': '장갑'
    },
    {
      'prompt': 'fedora',
      'description': '페도라(중절모)'
    },
    {
      'prompt': 'firefighter uniform',
      'description': '소방관 복장'
    },
    {
      'prompt': 'formal school uniform',
      'description': '교복(정장형)'
    },
    {
      'prompt': 'fur coat',
      'description': '모피 코트'
    },
    {
      'prompt': 'hanbok',
      'description': '한복'
    },
    {
      'prompt': 'hard hat',
      'description': '안전모'
    },
    {
      'prompt': 'hazmat suit',
      'description': '방호복'
    },
    {
      'prompt': 'hooded furry pajamas',
      'description': '동물 파자마 (잠옷)'
    },
    {
      'prompt': 'jeans',
      'description': '청바지'
    },
    {
      'prompt': 'jumpsuit',
      'description': '점프슈트'
    },
    {
      'prompt': 'letterman jacket',
      'description': '야구점퍼'
    },
    {
      'prompt': 'loincloth',
      'description': '훈도시'
    },
    {
      'prompt': 'military camouflage, camouflage',
      'description': '전투복(기타 장비 X)'
    },
    {
      'prompt': 'military hat',
      'description': '군인 정복 모자'
    },
    {
      'prompt': 'military helmet',
      'description': '군인 철모'
    },
    {
      'prompt': 'military operator',
      'description': '무장한 전투복'
    },
    {
      'prompt': 'morphsuit',
      'description': '모프수트'
    },
    {
      'prompt': 'necktie',
      'description': '넥타이'
    },
    {
      'prompt': 'overalls',
      'description': '작업복'
    },
    {
      'prompt': 'pantyhose',
      'description': '스타킹'
    },
    {
      'prompt': 'peaked cap',
      'description': '정모(제복모자)'
    },
    {
      'prompt': 'pleated dress',
      'description': '주름치마가 달린 드레스'
    },
    {
      'prompt': 'police uniform',
      'description': '경찰 제복'
    },
    {
      'prompt': 'police vest',
      'description': '경찰 조끼'
    },
    {
      'prompt': 'poncho',
      'description': '판초'
    },
    {
      'prompt': 'sherling jacket',
      'description': '무스탕'
    },
    {
      'prompt': 'skirtsuit',
      'description': '정장'
    },
    {
      'prompt': 'slacks',
      'description': '슬랙스'
    },
    {
      'prompt': 'spacesuit',
      'description': '우주복'
    },
    {
      'prompt': 'tennis shirts',
      'description': '테니스 셔츠'
    },
    {
      'prompt': 'tennis skirt',
      'description': '테니스 스커트'
    },
    {
      'prompt': 'track jacket',
      'description': '저지'
    },
    {
      'prompt': 'trench coat',
      'description': '트렌치코트'
    },
    {
      'prompt': 'tuxedo',
      'description': '턱시도'
    },
    {
      'prompt': 'wedding dress',
      'description': '웨딩드레스'
    },
    {
      'prompt': 'wetsuit',
      'description': '잠수복'
    },
    {
      'prompt': 'windbreaker',
      'description': '바람막이'
    }
  ],
  '의상 기타': [
    {
      'prompt': 'wedding dress<br />wedding gown',
      'description': '웨딩드레스'
    },
    {
      'prompt': 'bridal gauntlets',
      'description': '신부 팔목 장갑'
    },
    {
      'prompt': 'bridal veil',
      'description': '신부 베일'
    },
    {
      'prompt': 'bridal wear',
      'description': '신부 의상 (일체)'
    },
    {
      'prompt': 'bride',
      'description': '신부'
    },
    {
      'prompt': 'groom',
      'description': '신랑'
    },
    {
      'prompt': 'wedding band<br />wedding ring',
      'description': '결혼 반지'
    },
    {
      'prompt': 'bandaids',
      'description': '반창고'
    },
    {
      'prompt': 'choker',
      'description': '초커'
    },
    {
      'prompt': 'earrings',
      'description': '귀걸이'
    },
    {
      'prompt': 'hairband',
      'description': '헤어밴드'
    },
    {
      'prompt': 'hair ribbon',
      'description': '헤어리본'
    },
    {
      'prompt': 'halo',
      'description': '머리위 천사링'
    },
    {
      'prompt': 'sunglasses',
      'description': '선글라스'
    },
    {
      'prompt': 'wing',
      'description': '날개'
    }
  ],
  '장소 - 일반': [
    {
      'prompt': 'church',
      'description': '교회'
    },
    {
      'prompt': 'city',
      'description': '도시'
    },
    {
      'prompt': 'construction site',
      'description': '건설 현장'
    },
    {
      'prompt': 'convention',
      'description': '이벤트 회장'
    },
    {
      'prompt': 'courtroom',
      'description': '법정'
    },
    {
      'prompt': 'dungeon',
      'description': '지하 감옥'
    },
    {
      'prompt': 'floating city',
      'description': '도시(이동)'
    },
    {
      'prompt': 'garden',
      'description': '정원'
    },
    {
      'prompt': 'graveyard<br />cemetary',
      'description': '묘지'
    },
    {
      'prompt': 'hospital',
      'description': '병원'
    },
    {
      'prompt': 'infirmary',
      'description': '병실'
    },
    {
      'prompt': 'library',
      'description': '도서관'
    },
    {
      'prompt': 'outdoor wedding venue',
      'description': '야외 결혼식장'
    },
    {
      'prompt': 'park',
      'description': '공원'
    },
    {
      'prompt': 'prison',
      'description': '감옥'
    },
    {
      'prompt': 'throne',
      'description': '왕좌'
    },
    {
      'prompt': 'rooftop',
      'description': '옥상'
    },
    {
      'prompt': 'ruins',
      'description': '유적'
    },
    {
      'prompt': 'rural',
      'description': '도시(시골)'
    },
    {
      'prompt': 'shrine',
      'description': '신사'
    },
    {
      'prompt': 'stage',
      'description': '무대'
    },
    {
      'prompt': 'stair',
      'description': '계단'
    },
    {
      'prompt': 'temple',
      'description': '절'
    },
    {
      'prompt': 'town',
      'description': '도시(빌딩)'
    },
    {
      'prompt': 'village',
      'description': '도시(마을)'
    },
    {
      'prompt': 'bathroom',
      'description': '화장실'
    },
    {
      'prompt': 'bathtub',
      'description': '욕조'
    },
    {
      'prompt': 'bed',
      'description': '침대'
    },
    {
      'prompt': 'bedroom',
      'description': '침실'
    },
    {
      'prompt': 'house',
      'description': '집'
    },
    {
      'prompt': 'kitchen',
      'description': '주방'
    },
    {
      'prompt': 'living room',
      'description': '거실'
    },
    {
      'prompt': 'messy room',
      'description': '지저분한 방'
    },
    {
      'prompt': 'shower',
      'description': '샤워실'
    },
    {
      'prompt': 'toilet stall',
      'description': '칸막이 화장실'
    }
  ],
  '장소 - 주거지': [
    {
      'prompt': 'apartment',
      'description': '아파트'
    },
    {
      'prompt': 'bunker',
      'description': '벙커'
    },
    {
      'prompt': 'castle',
      'description': '성'
    },
    {
      'prompt': 'floating castle',
      'description': '움직이는 성'
    },
    {
      'prompt': 'hotel room',
      'description': '호텔 방'
    },
    {
      'prompt': 'hotel',
      'description': '호텔'
    },
    {
      'prompt': 'hut',
      'description': '오두막'
    },
    {
      'prompt': 'shack',
      'description': '오두막집'
    },
    {
      'prompt': 'stilt house',
      'description': '물 위의 집'
    },
    {
      'prompt': 'treehouse',
      'description': '나무 위의 집'
    }
  ],
  '장소 - 시설물': [
    {
      'prompt': 'aqueduct',
      'description': '수로'
    },
    {
      'prompt': 'armory',
      'description': '창고(무기고)'
    },
    {
      'prompt': 'bakery',
      'description': '빵집'
    },
    {
      'prompt': 'barn',
      'description': '외양간'
    },
    {
      'prompt': 'bookstore',
      'description': '서점'
    },
    {
      'prompt': 'bridge',
      'description': '다리'
    },
    {
      'prompt': 'butcher shop',
      'description': '정육점'
    },
    {
      'prompt': 'cafeteria',
      'description': '구내 식당'
    },
    {
      'prompt': 'changing room',
      'description': '탈의실'
    },
    {
      'prompt': 'classroom',
      'description': '교실'
    },
    {
      'prompt': 'closet',
      'description': '창고(옷장)'
    },
    {
      'prompt': 'clubroom',
      'description': '동아리방'
    },
    {
      'prompt': 'conservatory',
      'description': '온실'
    },
    {
      'prompt': 'convenience store',
      'description': '편의점'
    },
    {
      'prompt': 'cubicle',
      'description': '1인 사무실'
    },
    {
      'prompt': 'dam',
      'description': '댐'
    },
    {
      'prompt': 'dining room',
      'description': '식당'
    },
    {
      'prompt': 'dock',
      'description': '둑'
    },
    {
      'prompt': 'fitting room',
      'description': '피팅룸'
    },
    {
      'prompt': 'flower shop',
      'description': '꽃집'
    },
    {
      'prompt': 'fountain',
      'description': '분수'
    },
    {
      'prompt': 'gazebo',
      'description': '전망대'
    },
    {
      'prompt': 'greenhouse',
      'description': '온실'
    },
    {
      'prompt': 'laboratory',
      'description': '실험실'
    },
    {
      'prompt': 'market stall',
      'description': '시장 마켓'
    },
    {
      'prompt': 'market',
      'description': '시장'
    },
    {
      'prompt': 'office',
      'description': '사무실'
    },
    {
      'prompt': 'parking lot',
      'description': '주차장'
    },
    {
      'prompt': 'pharmacy, drugstore',
      'description': '약국'
    },
    {
      'prompt': 'phone booth',
      'description': '전화 부스'
    },
    {
      'prompt': 'planetarium',
      'description': '별자리 투영기'
    },
    {
      'prompt': 'restaurant',
      'description': '레스토랑'
    },
    {
      'prompt': 'restroom',
      'description': '화장실'
    },
    {
      'prompt': 'rope bridge',
      'description': '밧줄다리'
    },
    {
      'prompt': 'salon',
      'description': '샬롱'
    },
    {
      'prompt': 'school',
      'description': '학교'
    },
    {
      'prompt': 'shop',
      'description': '가게'
    },
    {
      'prompt': 'staff room',
      'description': '직원실'
    },
    {
      'prompt': 'storage room',
      'description': '창고'
    },
    {
      'prompt': 'supermarket',
      'description': '슈퍼마켓'
    },
    {
      'prompt': 'tunnel',
      'description': '터널'
    },
    {
      'prompt': 'weapon shop',
      'description': '무기 상점'
    },
    {
      'prompt': 'wooden bridge',
      'description': '나무다리'
    },
    {
      'prompt': 'workshop',
      'description': '작업장'
    },
    {
      'prompt': 'amphitheater',
      'description': '극장 영화관'
    },
    {
      'prompt': 'amusement park',
      'description': '놀이 공원'
    },
    {
      'prompt': 'aquarium',
      'description': '수족관'
    },
    {
      'prompt': 'arcade',
      'description': '게임장'
    },
    {
      'prompt': 'arena',
      'description': '투기장'
    },
    {
      'prompt': 'art gallery',
      'description': '미술관'
    },
    {
      'prompt': 'bar',
      'description': '술집'
    },
    {
      'prompt': 'cafe',
      'description': '카페'
    },
    {
      'prompt': 'carousel',
      'description': '회전목마'
    },
    {
      'prompt': 'casino',
      'description': '카지노'
    },
    {
      'prompt': 'ferris wheel',
      'description': '관람차'
    },
    {
      'prompt': 'mall',
      'description': '쇼핑 센터'
    },
    {
      'prompt': 'movie theater',
      'description': '영화관'
    },
    {
      'prompt': 'museum',
      'description': '박물관'
    },
    {
      'prompt': 'nightclub',
      'description': '클럽'
    },
    {
      'prompt': 'observatory',
      'description': '전망대'
    },
    {
      'prompt': 'onsen',
      'description': '온천'
    },
    {
      'prompt': 'roller coaster',
      'description': '롤러 코스터'
    },
    {
      'prompt': 'stadium',
      'description': '경기장'
    },
    {
      'prompt': 'theater',
      'description': '극장 원형 극장'
    },
    {
      'prompt': 'zoo',
      'description': '동물원'
    },
    {
      'prompt': 'airfield',
      'description': '비행장'
    },
    {
      'prompt': 'airport',
      'description': '공항'
    },
    {
      'prompt': 'alley',
      'description': '도로 골목'
    },
    {
      'prompt': 'bus stop',
      'description': '버스 정류장'
    },
    {
      'prompt': 'canal',
      'description': '운하'
    },
    {
      'prompt': 'control tower',
      'description': '공항 컨트롤 타워'
    },
    {
      'prompt': 'crosswalk',
      'description': '도로 횡단 보도'
    },
    {
      'prompt': 'dirt road',
      'description': '도로 흙길'
    },
    {
      'prompt': 'garage',
      'description': '차고'
    },
    {
      'prompt': 'gas station',
      'description': '주유소'
    },
    {
      'prompt': 'hangar',
      'description': '공항 격납고'
    },
    {
      'prompt': 'harbor',
      'description': '항구'
    },
    {
      'prompt': 'highway',
      'description': '도로 고속도로'
    },
    {
      'prompt': 'jetty',
      'description': '교각 선착장'
    },
    {
      'prompt': 'overpass',
      'description': '육교, 가도교'
    },
    {
      'prompt': 'path',
      'description': '도로 길'
    },
    {
      'prompt': 'pier',
      'description': '교각'
    },
    {
      'prompt': 'railroad crossing',
      'description': '철도 교차로'
    },
    {
      'prompt': 'railroad tracks',
      'description': '철도 선로'
    },
    {
      'prompt': 'road',
      'description': '도로'
    },
    {
      'prompt': 'runway',
      'description': '공항 통로'
    },
    {
      'prompt': 'runway',
      'description': '비행장 활주로'
    },
    {
      'prompt': 'shipyard',
      'description': '조선소'
    },
    {
      'prompt': 'sidewalk',
      'description': '도로 보도'
    },
    {
      'prompt': 'stone walkway',
      'description': '도로 돌산책로'
    },
    {
      'prompt': 'street',
      'description': '도로 거리'
    },
    {
      'prompt': 'street lamp',
      'description': '가로등이 켜진 거리'
    },
    {
      'prompt': 'train station',
      'description': '기차역'
    }
  ],
  '장소 - 자연': [
    {
      'prompt': 'bamboo forest',
      'description': '대나무 숲'
    },
    {
      'prompt': 'beach',
      'description': '해변'
    },
    {
      'prompt': 'canyon',
      'description': '협곡'
    },
    {
      'prompt': 'cave',
      'description': '동굴'
    },
    {
      'prompt': 'cliff',
      'description': '낭떠러지, 절벽'
    },
    {
      'prompt': 'desert',
      'description': '사막'
    },
    {
      'prompt': 'floating island',
      'description': '부유도, 섬이 떠다니다'
    },
    {
      'prompt': 'forest',
      'description': '숲'
    },
    {
      'prompt': 'geyser',
      'description': '온천'
    },
    {
      'prompt': 'glacier',
      'description': '빙하'
    },
    {
      'prompt': 'hill',
      'description': '언덕'
    },
    {
      'prompt': 'island',
      'description': '섬'
    },
    {
      'prompt': 'jungle',
      'description': '밀림'
    },
    {
      'prompt': 'lake',
      'description': '호수'
    },
    {
      'prompt': 'meadow',
      'description': '목초지'
    },
    {
      'prompt': 'mountain',
      'description': '산'
    },
    {
      'prompt': 'nature',
      'description': '자연'
    },
    {
      'prompt': 'oasis',
      'description': '오아시스'
    },
    {
      'prompt': 'ocean bottom',
      'description': '해저'
    },
    {
      'prompt': 'ocean',
      'description': '대양'
    },
    {
      'prompt': 'pond',
      'description': '연못'
    },
    {
      'prompt': 'rainforest',
      'description': '열대우림'
    },
    {
      'prompt': 'river',
      'description': '강'
    },
    {
      'prompt': 'savannah',
      'description': '사바나'
    },
    {
      'prompt': 'shore',
      'description': '해변가'
    },
    {
      'prompt': 'stream',
      'description': '개울'
    },
    {
      'prompt': 'swamp',
      'description': '늪지'
    },
    {
      'prompt': 'tidal flat',
      'description': '갯벌'
    },
    {
      'prompt': 'underwater',
      'description': '바닷속'
    },
    {
      'prompt': 'volcano',
      'description': '산(화산)'
    },
    {
      'prompt': 'wasteland',
      'description': '황무지'
    },
    {
      'prompt': 'waterfall',
      'description': '폭포'
    },
    {
      'prompt': 'wetland',
      'description': '습지'
    }
  ],
  '장소 - 스포츠': [
    {
      'prompt': 'bowling alley',
      'description': '볼링장'
    },
    {
      'prompt': 'gym storeroom',
      'description': '체육관창고'
    },
    {
      'prompt': 'gym',
      'description': '헬스장'
    },
    {
      'prompt': 'locker room',
      'description': '라커룸'
    },
    {
      'prompt': 'playground',
      'description': '운동장'
    },
    {
      'prompt': 'pool',
      'description': '수영장'
    },
    {
      'prompt': 'poolside',
      'description': '풀사이드'
    },
    {
      'prompt': 'running track',
      'description': '운동장 경기장'
    },
    {
      'prompt': 'skating rink',
      'description': '스케이트장'
    },
    {
      'prompt': 'soccer field',
      'description': '운동장 축구장'
    },
    {
      'prompt': 'waterpark',
      'description': '워터파크'
    }
  ],
  '환경 - 시간': [
    {
      'prompt': 'autumn',
      'description': '가을'
    },
    {
      'prompt': 'day',
      'description': '낮'
    },
    {
      'prompt': 'evening',
      'description': '저녁'
    },
    {
      'prompt': 'morning',
      'description': '아침'
    },
    {
      'prompt': 'night',
      'description': '밤'
    },
    {
      'prompt': 'spring',
      'description': '봄'
    },
    {
      'prompt': 'sunrise',
      'description': '일출'
    },
    {
      'prompt': 'summer',
      'description': '여름'
    },
    {
      'prompt': 'sunset',
      'description': '해질녘, 일몰'
    },
    {
      'prompt': 'winter',
      'description': '겨울'
    }
  ],
  '환경 - 날씨': [
    {
      'prompt': 'aurora',
      'description': '오로라'
    },
    {
      'prompt': 'blizzard',
      'description': '눈보라'
    },
    {
      'prompt': 'cold, freezing, icy',
      'description': '추운'
    },
    {
      'prompt': 'cloud',
      'description': '구름'
    },
    {
      'prompt': 'cloudy',
      'description': '구름이 많은'
    },
    {
      'prompt': 'dark clouds',
      'description': '먹구름'
    },
    {
      'prompt': 'drizzle',
      'description': '소나기 내리는'
    },
    {
      'prompt': 'dust storm',
      'description': '모래폭풍'
    },
    {
      'prompt': 'foggy',
      'description': '안개가 낀'
    },
    {
      'prompt': 'humid',
      'description': '습한'
    },
    {
      'prompt': 'lightning',
      'description': '번개'
    },
    {
      'prompt': 'rainbow',
      'description': '무지개'
    },
    {
      'prompt': 'rainpouring, downpour',
      'description': '강하게 비 내리는'
    },
    {
      'prompt': 'rainy',
      'description': '비 내리는'
    },
    {
      'prompt': 'snowy, snowing',
      'description': '눈 내리는'
    },
    {
      'prompt': 'starry sky',
      'description': '별이 많은 하늘'
    },
    {
      'prompt': 'sunny',
      'description': '맑은'
    },
    {
      'prompt': 'thunderstorm',
      'description': '뇌우'
    },
    {
      'prompt': 'tornado',
      'description': '토네이도'
    },
    {
      'prompt': 'wind, windy',
      'description': '바람'
    }
  ],
  '환경 - 기타': [
    {
      'prompt': 'cirrus fibratus',
      'description': '권운 (새털구름)'
    },
    {
      'prompt': 'cirrostratus fibratus',
      'description': '권층운'
    },
    {
      'prompt': 'altocumulus',
      'description': '고적운'
    },
    {
      'prompt': 'cumulus',
      'description': '적운(뭉게구름)'
    },
    {
      'prompt': 'cumulonimbus',
      'description': '적란운'
    },
    {
      'prompt': 'lenticular cloud',
      'description': '렌즈 구름'
    },
    {
      'prompt': 'supercell',
      'description': '슈퍼셀 (뇌우)'
    },
    {
      'prompt': 'contrail',
      'description': '비행운(비행기 구름)'
    },
    {
      'prompt': 'stratus',
      'description': '층운 (안개)'
    },
    {
      'prompt': 'nimbostratus',
      'description': '난층운(비구름)'
    },
    {
      'prompt': 'undulatus clouds',
      'description': '파상구름'
    },
    {
      'prompt': 'undulatus asperatus',
      'description': '거친물결구름'
    },
    {
      'prompt': 'noctilucent cloud',
      'description': '야광운'
    },
    {
      'prompt': 'mushroom cloud',
      'description': '버섯구름(핵폭발)'
    },
    {
      'prompt': 'crescent moon',
      'description': '초승달'
    },
    {
      'prompt': 'eclipse',
      'description': '일식, 월식'
    },
    {
      'prompt': 'full moon',
      'description': '보름달, 만월'
    },
    {
      'prompt': 'horizon',
      'description': '지평선, 수평선'
    },
    {
      'prompt': 'mountainous horizon',
      'description': '산으로 된 지평선'
    }
  ],
  '동작': [
    {
      'prompt': 'animated',
      'description': '적당한 포즈를 취함(랜덤)'
    },
    {
      'prompt': 'arms up',
      'description': '팔들기'
    },
    {
      'prompt': 'grabbing *',
      'description': '*를 잡음'
    },
    {
      'prompt': 'pull *',
      'description': '*를 잡아당김'
    },
    {
      'prompt': 'standing on one leg',
      'description': '한발로 서있음'
    },
    {
      'prompt': 'apologizing',
      'description': '사과하다'
    },
    {
      'prompt': 'baking',
      'description': '(빵을 굽다)'
    },
    {
      'prompt': 'balancing',
      'description': '균형잡다'
    },
    {
      'prompt': 'blinking',
      'description': '눈을 깜빡이다'
    },
    {
      'prompt': 'blocking',
      'description': '말리다'
    },
    {
      'prompt': 'catching',
      'description': '매달다'
    },
    {
      'prompt': 'chasing',
      'description': '쫓다'
    },
    {
      'prompt': 'cheering',
      'description': '응원하다'
    },
    {
      'prompt': 'chocolate making',
      'description': '초콜렛을 만들다'
    },
    {
      'prompt': 'climbing',
      'description': '등반하다'
    },
    {
      'prompt': 'concentrating',
      'description': '집중하다'
    },
    {
      'prompt': 'cooking',
      'description': '음식을 요리하다'
    },
    {
      'prompt': 'cowering',
      'description': '몸을 웅크리다'
    },
    {
      'prompt': 'crawling',
      'description': '네 발로 걷다'
    },
    {
      'prompt': 'dancing',
      'description': '춤추다'
    },
    {
      'prompt': 'digging',
      'description': '땅을 파다'
    },
    {
      'prompt': 'diving',
      'description': '물 속에 다이빙하다'
    },
    {
      'prompt': 'dreaming',
      'description': '꿈꾸다'
    },
    {
      'prompt': 'dressing',
      'description': '옷을 입다'
    },
    {
      'prompt': 'drinking',
      'description': '술을 마시다'
    },
    {
      'prompt': 'driving',
      'description': '운전하다'
    },
    {
      'prompt': 'drying',
      'description': '몸을 말리다'
    },
    {
      'prompt': 'duel',
      'description': '결투하다'
    },
    {
      'prompt': 'elbowing',
      'description': '팔꿈치로 때리다'
    },
    {
      'prompt': 'feeding',
      'description': '누군가에게 음식을 권하다'
    },
    {
      'prompt': 'fighting',
      'description': '싸우다'
    },
    {
      'prompt': 'firing',
      'description': '총을 쏘다'
    },
    {
      'prompt': 'flailing',
      'description': '어리광을 부리다'
    },
    {
      'prompt': 'flapping',
      'description': '날개를 펄럭이다'
    },
    {
      'prompt': 'fleeing',
      'description': '도망치다'
    },
    {
      'prompt': 'gardening',
      'description': '꽃에 물을 주다'
    },
    {
      'prompt': 'hopping',
      'description': '약하게 점프하다'
    },
    {
      'prompt': 'hug from behind',
      'description': '뒤에서 껴안다'
    },
    {
      'prompt': 'imitating',
      'description': '따라하다'
    },
    {
      'prompt': 'jumping',
      'description': '점프하다'
    },
    {
      'prompt': 'kneeing',
      'description': '무릎을 꿇다'
    },
    {
      'prompt': 'knocking',
      'description': '노크하다'
    },
    {
      'prompt': 'landing',
      'description': '내려오다'
    },
    {
      'prompt': 'laughing',
      'description': '웃다'
    },
    {
      'prompt': 'launching',
      'description': '착륙 준비하다'
    },
    {
      'prompt': 'mind reading',
      'description': '의 마음을 읽다'
    },
    {
      'prompt': 'pen spinning',
      'description': '펜을 회전하다'
    },
    {
      'prompt': 'playing',
      'description': '놀다'
    },
    {
      'prompt': 'pouncing',
      'description': '강하게 점프하다'
    },
    {
      'prompt': 'pouring',
      'description': '물을 잔에 붓다'
    },
    {
      'prompt': 'rappelling',
      'description': '로프를 타고 내려온다'
    },
    {
      'prompt': 'reaching',
      'description': '하강하다'
    },
    {
      'prompt': 'reading',
      'description': '책을 읽다'
    },
    {
      'prompt': 'reloading',
      'description': '총을 재장전하다'
    },
    {
      'prompt': 'resisting',
      'description': '매우 저항하다'
    },
    {
      'prompt': 'resting',
      'description': '휴식하다'
    },
    {
      'prompt': 'roaring',
      'description': '위협하다'
    },
    {
      'prompt': 'roasting',
      'description': '음식을 데우다'
    },
    {
      'prompt': 'running',
      'description': '도주하다'
    },
    {
      'prompt': 'screaming',
      'description': '소리를 크게 낸다'
    },
    {
      'prompt': 'searching',
      'description': '주위를 둘러본다'
    },
    {
      'prompt': 'singing',
      'description': '노래하다'
    },
    {
      'prompt': 'sliding',
      'description': '슬라이딩하다'
    },
    {
      'prompt': 'slipping',
      'description': '미끄러지다'
    },
    {
      'prompt': 'smoking',
      'description': '담배를 피다'
    },
    {
      'prompt': 'sneezing',
      'description': '재채기하다'
    },
    {
      'prompt': 'splashing',
      'description': '물이 몸에 튀다'
    },
    {
      'prompt': 'sunbathing',
      'description': '일광욕하다'
    },
    {
      'prompt': 'sweeping',
      'description': '흙먼지를 쓸다'
    },
    {
      'prompt': 'text messaging',
      'description': '문자 메시지를 보내다'
    },
    {
      'prompt': 'touching',
      'description': '감동하다'
    },
    {
      'prompt': 'trembling',
      'description': '몸을 떨다'
    },
    {
      'prompt': 'waiting',
      'description': '대기하다'
    },
    {
      'prompt': 'watering',
      'description': '물을 뿌리다'
    },
    {
      'prompt': 'aiming',
      'description': '조준하다'
    },
    {
      'prompt': 'at gunpoint',
      'description': '총구로 조준하다'
    },
    {
      'prompt': 'cleaning',
      'description': '청소하다'
    }
  ]
}

async function CopyPrompt() {
  const box = document.getElementById('tti-box');
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(box.innerText);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  await copyContent();
  alert('프롬프트가 복사되었습니다.');
}

function InsertPrompt(prompt) {
  let box = document.getElementById('tti-box');
  // box 에 onclick 이벤트가 없으면 추가
  if (!box.onclick) {
    box.onclick = CopyPrompt;
  }
  // box.innerText 에 값이 없는지 확인
  if (box.innerText === '') {
    box.innerText += prompt;
    return;
  }
  // box.innerText 에 값이 있는지 확인
  if (box.innerText.includes(prompt)) {
    // ', {prompt}' 가 있거나 '{prompt}' 가 있으면 제거
    if (box.innerText.includes(', ' + prompt)) {
      box.innerText = box.innerText.replace(', ' + prompt, '');
    }
    if (box.innerText.includes(prompt)) {
      box.innerText = box.innerText.replace(prompt, '');
    }
    return;
  }
  box.innerText += ', ' + prompt;
}

export default function TextToImage(props) {
  return (
    <table className={styles.ttiTableBody}>
      <thead>
      <tr>
        <th className={styles.ttiTableHead1}>prompt</th>
        <th className={styles.ttiTableHead1}>description</th>
      </tr>
      </thead>
      <tbody>
      {data[props.prompt].map((item, index) => (
        <tr key={index} onClick={() => InsertPrompt(item.prompt)} className={styles.ttiTablePrompt}>
          <td dangerouslySetInnerHTML={{__html: item.prompt}}></td>
          <td dangerouslySetInnerHTML={{__html: item.description}}></td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}
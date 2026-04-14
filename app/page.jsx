export default function NanoBioSystemLabPage() {
  const researchAreas = [
    {
      title: 'Bio-MEMS / NEMS',
      desc: 'MEMS/NEMS 기반의 바이오 디바이스 설계 및 제작, 단일 세포 전기적 특성 분석 및 전기전공 연구',
      tag: 'Bio-MEMS',
      image:
        'https://images.unsplash.com/photo-1581092921461-eab10380d70a?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Microfluidics',
      desc: '마이크로채널 내 입자 집중·분리 기술, 점탄성 유체 및 음파역학을 활용한 고효율 세포 분리',
      tag: 'Microfluidics',
      image:
        'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Nanofabrication',
      desc: '나노임프린팅, 나노채널 어레이 제작, 리소그래피 없이 단일 분자 분석용 나노구조물 구현',
      tag: 'Nanofabrication',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Biosensor',
      desc: '실리콘 나노와이어 기반 바이오센서, 온도 특성 분석 및 나노미터 공용 연구',
      tag: 'Biosensor',
      image:
        'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Droplet Microfluidics',
      desc: '단분산 미세액적 생성 및 단일 입자 캡슐화, 고처리량 시스템 개발',
      tag: 'Droplet',
      image:
        'https://images.unsplash.com/photo-1513553404607-988d4c4de6c7?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Surface Engineering',
      desc: '초소수성/초친수성 표면 제작, 이방성 젖음 특성 표면 및 마이크로 렌즈 어레이 제작',
      tag: 'Surface',
      image:
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const news = [
    {
      type: '논문',
      title: 'Acousto-viscoelastic droplet microfluidics 논문 Sensors and Actuators B-Chemical 게재',
      date: '2026.04',
    },
    {
      type: '논문',
      title: 'Focusing and enrichment of deep-submicron particles 논문 Microfluidics and Nanofluidics 게재',
      date: '2026.02',
    },
    {
      type: '학회',
      title: '대한기계학회 창립 80주년 기념 춘계학술대회 발표',
      date: '2025.11',
    },
    {
      type: '학회',
      title: '한국생산제조학회 창립 30주년 기념 추계학술대회 논문 발표',
      date: '2025.03',
    },
    {
      type: '수상',
      title: '우수학생상 수상 - 대한기계학회',
      date: '2025.06',
    },
    {
      type: '공지',
      title: '신규 대학원생 모집 - 마이크로플루이딕스 분야 연구원 모집',
      date: '2025.03',
    },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1200&q=80',
  ];

  const members = [
    {
      nameKo: '조영학',
      nameEn: 'Young Hak Cho',
      role: 'Professor',
      research: 'Bio-MEMS/NEMS, Microfluidics, Nanofabrication',
      email: 'yhcho@seoultech.ac.kr',
      tel: '02-970-6361',
      lab: '프론티어관 1007호 / 혜성관 406호',
      image: '/professor.jpg',
      education: [
        'B.S. — Seoul National University',
        'M.S. — Seoul National University',
        'Ph.D. — University of Tokyo',
      ],
      career: [
        'Post-doctoral Researcher, Institute of Industrial Science, University of Tokyo',
        'Post-doctoral Researcher, Texas A&M University',
        'Professor, Seoul National University of Science & Technology',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-3xl font-bold tracking-tight text-slate-900">Nano Bio System Lab</div>
            <div className="text-sm text-slate-500">Seoul National University of Science and Technology</div>
          </div>
          <nav className="hidden items-center gap-2 md:flex">
            {['Home', 'About', 'Members', 'Research', 'Board', 'Gallery'].map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                  idx === 0 ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-r from-slate-100 via-cyan-50 to-teal-100">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1800&q=80"
            alt="hero background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Seoul National University of Science and Technology
            </p>
            <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight text-slate-900 lg:text-7xl">
              Nano Bio
              <br />
              System Lab
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Pioneering Bio-MEMS, microfluidics, and nanofabrication for next-generation biomedical platforms.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#about"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
              >
                About the Lab
              </a>
              <a
                href="#board"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Publications
              </a>
            </div>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="h-[420px] w-full rounded-[2rem] border border-white/60 bg-white/30 shadow-2xl backdrop-blur-sm" />
          </div>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Research Areas</h2>
          <p className="mt-4 text-slate-500">MEMS · Microfluidics · Nanofabrication · Biosensor</p>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-slate-900" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {researchAreas.map((area) => (
            <article
              key={area.title}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white">
                  {area.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{area.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 rounded-[2rem] bg-slate-900 px-10 py-16 text-white">
            <h2 className="text-4xl font-bold">About</h2>
            <p className="mt-3 text-slate-300">연구실 소개</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
            <div>
              <h3 className="text-4xl font-bold text-slate-900">연구실 소개</h3>
              <div className="mt-4 h-1 w-16 rounded-full bg-slate-900" />
              <p className="mt-8 text-lg leading-9 text-slate-700">
                Nano Bio System Lab(나노바이오시스템 연구실)은 MEMS/NEMS 및 마이크로플루이딕스 기술을 기반으로
                생명과학·의공학 분야의 난제를 해결하는 연구를 수행합니다. 나노·마이크로 스케일의 채널과 구조물을 설계·제작하여
                단일 세포의 전기적 특성 측정, 세포 분리, 엑소좀 검출 등 첨단 바이오 분석 플랫폼을 개발합니다.
              </p>
              <blockquote className="mt-8 border-l-4 border-slate-200 pl-6 text-lg italic leading-9 text-slate-500">
                Nano Bio System Lab pioneers research at the intersection of MEMS/NEMS and biomedical engineering.
                We design and fabricate nano/micro-scale channels and structures to build advanced bioanalytical platforms.
              </blockquote>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {[
                  ['Viscoelastic Microfluidics', '점탄성 유체 기반 서브마이크로 입자 집중·분리'],
                  ['Acoustophoresis', '음파영동을 이용한 세포·입자 고효율 분리'],
                  ['Droplet Microfluidics', '단분산 액적 생성 및 단일 입자 캡슐화'],
                  ['Single-Cell Analysis', '단일 세포 전기적 특성 측정 및 전기천공'],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-lg font-semibold text-slate-900">{title}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] bg-[#183b68] p-8 text-white shadow-xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Lab at a glance</div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ['2009', 'Founded'],
                  ['80+', 'Journal Papers'],
                  ['150+', 'Conferences'],
                  ['4', 'Patents'],
                ].map(([num, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                    <div className="text-4xl font-bold">{num}</div>
                    <div className="mt-2 text-sm text-slate-300">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-slate-300">
                <div>기계시스템디자인공학과</div>
                <div>서울과학기술대학교</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="members" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 rounded-[2rem] bg-slate-900 px-10 py-16 text-white">
            <h2 className="text-4xl font-bold">Members</h2>
            <p className="mt-3 text-slate-300">Nano Bio System Lab · Seoul National University of Science & Technology</p>
          </div>

          {members.map((member) => (
            <div key={member.email} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
                <div>
                  <img
                    src={member.image}
                    alt={member.nameEn}
                    className="h-80 w-full rounded-[1.5rem] object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-5xl font-bold tracking-tight text-slate-900">{member.nameKo}</h3>
                  <p className="mt-2 text-2xl text-slate-400">{member.nameEn}</p>
                  <span className="mt-5 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                    {member.role}
                  </span>

                  <div className="mt-8 space-y-3 text-slate-600">
                    <div><span className="font-semibold text-slate-900">Research:</span> {member.research}</div>
                    <div><span className="font-semibold text-slate-900">Email:</span> {member.email}</div>
                    <div><span className="font-semibold text-slate-900">Tel:</span> {member.tel}</div>
                    <div><span className="font-semibold text-slate-900">Lab:</span> {member.lab}</div>
                  </div>

                  <div className="mt-10 grid gap-10 md:grid-cols-2">
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-[0.15em] text-slate-900">Education</h4>
                      <div className="mt-6 space-y-4">
                        {member.education.map((item) => (
                          <div key={item} className="rounded-2xl bg-slate-50 p-4 text-slate-700">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-[0.15em] text-slate-900">Career</h4>
                      <div className="mt-6 space-y-4">
                        {member.career.map((item) => (
                          <div key={item} className="rounded-2xl bg-slate-50 p-4 text-slate-700">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="board" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">Latest News</h2>
              <p className="mt-3 text-slate-500">연구실 소식, 논문 게재, 학회 발표, 공지사항</p>
            </div>
            <a href="#" className="hidden text-sm font-semibold text-slate-600 md:block">
              View all →
            </a>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {news.map((item) => (
              <article
                key={`${item.type}-${item.title}`}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 transition hover:border-slate-300 hover:bg-white"
              >
                <div className="min-w-0">
                  <div className="mb-2 inline-flex rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-slate-500 ring-1 ring-slate-200">
                    {item.type}
                  </div>
                  <h3 className="truncate pr-6 text-sm font-semibold text-slate-900 md:text-base">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.date}</p>
                </div>
                <div className="shrink-0 text-slate-300">→</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">Gallery</h2>
              <p className="mt-3 text-slate-500">워크숍, 실험실 활동, 학회 발표 사진</p>
            </div>
            <a href="#" className="hidden text-sm font-semibold text-slate-600 md:block">
              View all →
            </a>
          </div>

          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img src={gallery[0]} alt="gallery main" className="h-[520px] w-full object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-5 gap-3">
              {gallery.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`gallery ${idx + 1}`}
                  className={`h-24 w-full rounded-xl object-cover ${idx === 0 ? 'ring-2 ring-slate-900' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Join Our Lab</h3>
            <p className="mt-2 text-slate-600">
              대학원생(석사/박사) 및 학부 연구생을 모집합니다. MEMS, 마이크로플루이딕스, 바이오센서 분야에 관심 있는 분의 지원을 환영합니다.
            </p>
          </div>
          <a
            href="#board"
            className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
          >
            공지사항 확인
          </a>
        </div>
      </section>

      <footer className="bg-[#14365f] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <h3 className="text-2xl font-bold">Nano Bio System Lab</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              기계시스템디자인공학과, 서울과학기술대학교
              <br />
              프론티어관 1007호 / 혜성관 406호
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <div>Email: yhcho@seoultech.ac.kr</div>
              <div>Tel: 02-970-6361</div>
              <div>서울 노원구 공릉로 232 서울과학기술대학교</div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#members" className="hover:text-white">Members</a>
              <a href="#research" className="hover:text-white">Research</a>
              <a href="#gallery" className="hover:text-white">Gallery</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

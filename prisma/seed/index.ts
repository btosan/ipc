import "dotenv/config";
import { PrismaClient } from "../../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding IPC database...\n");

  // ── 1. Users ───────────────────────────────────────────────
  console.log("👤 Creating users...");
  const adminPassword = await bcrypt.hash("Admin@1234", 12);
  await prisma.user.upsert({
    where: { email: "admin@ipc.ngpage.com" },
    update: {},
    create: {
      email: "admin@ipc.ngpage.com",
      password: adminPassword,
      name: "IPC Admin",
      role: "ADMIN",
    },
  });

  const editorPassword = await bcrypt.hash("Editor@1234", 12);
  await prisma.user.upsert({
    where: { email: "editor@ipc.ngpage.com" },
    update: {},
    create: {
      email: "editor@ipc.ngpage.com",
      password: editorPassword,
      name: "Content Editor",
      role: "EDITOR",
    },
  });
  console.log("   ✓ Admin and Editor accounts created\n");

  // ── 2. Impact Stats ────────────────────────────────────────
  console.log("📊 Creating impact stats...");
  const stats = [
    { label: "Lives Impacted",       value: "250,000+", description: "Individuals directly reached through our programmes since inception",                         icon: "Heart"         },
    { label: "Communities Served",   value: "840+",     description: "Communities across Africa, Asia, and the Americas transformed through peace initiatives",     icon: "Home"          },
    { label: "Countries Active",     value: "34",       description: "Nations with active IPC chapters and programme delivery",                                     icon: "Globe"         },
    { label: "Volunteers Mobilised", value: "12,000+",  description: "Passionate individuals dedicating time and skills to sustainable peace",                      icon: "Users"         },
    { label: "Jobs Created",         value: "6,500+",   description: "Livelihoods established through our Skill Acquisition and Environmental Services programmes", icon: "Briefcase"     },
    { label: "Youths Trained",       value: "38,000+",  description: "Young people empowered through the Talent Hunt Initiative and workshops",                     icon: "GraduationCap" },
  ];
  for (const s of stats) {
    const existing = await prisma.impactStat.findFirst({ where: { label: s.label } });
    if (!existing) await prisma.impactStat.create({ data: s });
  }
  console.log("   ✓ 6 impact stats created\n");

  // ── 3. Partners ────────────────────────────────────────────
  console.log("🤝 Creating partners...");
  const partners = [
    { name: "United Nations Development Programme", tier: "government",  logo: null, website: "https://undp.org"         },
    { name: "African Union Commission",             tier: "government",  logo: null, website: "https://au.int"            },
    { name: "World Peace Foundation",               tier: "ngo",         logo: null, website: "https://worldpeace.org"    },
    { name: "Seeds of Peace",                       tier: "ngo",         logo: null, website: "https://seedsofpeace.org"  },
    { name: "Access Bank Nigeria",                  tier: "corporate",   logo: null, website: "https://accessbankplc.com" },
    { name: "Dangote Foundation",                   tier: "corporate",   logo: null, website: "https://dangote.com"       },
    { name: "Christian Association of Nigeria",     tier: "faith-based", logo: null, website: "https://can.org.ng"        },
    { name: "Supreme Council for Islamic Affairs",  tier: "faith-based", logo: null, website: null                        },
  ];
  for (const p of partners) {
    const existing = await prisma.partner.findFirst({ where: { name: p.name } });
    if (!existing) await prisma.partner.create({ data: p });
  }
  console.log("   ✓ 8 partners created\n");

  // ── 4. News Articles ───────────────────────────────────────
  console.log("📰 Creating news articles...");
  const articles = [
    {
      title:       "IPC Partners with UN Bodies for Expanded Peacebuilding Reach",
      excerpt:     "New strategic alliance with UNDP and AU Commission to co-deliver peace programmes across 10 additional African nations.",
      content:     "International Peace Crusaders has formalised a landmark partnership with the United Nations Development Programme and the African Union Commission. The agreement, signed at IPC's Lagos headquarters, will see the organisations co-fund and co-deliver peace programmes targeting conflict-affected communities in ten additional African nations over the next three years.",
      imageUrl:    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      publishedAt: new Date("2025-04-15"),
    },
    {
      title:       "IPC Skill Acquisition Programme Graduates 5,000 Beneficiaries",
      excerpt:     "The milestone cohort — trained in ICT, tailoring, solar installation, and agribusiness — marks a decade of unbroken training delivery.",
      content:     "International Peace Crusaders celebrated a major milestone as the 5,000th graduate of its Skill Acquisition Programme received her certificate at a ceremony in Port Harcourt. The programme offers free vocational training to individuals from conflict-affected and economically marginalised communities.",
      imageUrl:    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
      publishedAt: new Date("2025-03-10"),
    },
    {
      title:       "Community Peace Movement Resolves Long-Standing Border Dispute in Benue",
      excerpt:     "IPC mediators facilitated a peaceful resolution to a 12-year land conflict between two farming communities, averting potential violence.",
      content:     "After months of structured dialogue sessions facilitated by International Peace Crusaders' Community Peace Movement, two farming communities in Benue State have signed a historic peace accord, resolving a 12-year border dispute that had repeatedly threatened to erupt into violence.",
      imageUrl:    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
      publishedAt: new Date("2025-02-20"),
    },
  ];
  for (const a of articles) {
    const existing = await prisma.newsArticle.findFirst({ where: { title: a.title } });
    if (!existing) await prisma.newsArticle.create({ data: a });
  }
  console.log("   ✓ 3 news articles created\n");

  // ── 5. Gallery Images ──────────────────────────────────────
  console.log("🖼️  Creating gallery images...");
  const gallery = [
    { title: "Volunteer Summit — Lagos 2024",        category: "Events",      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80", description: "Annual gathering of IPC volunteer leaders from across 34 active countries."                     },
    { title: "Skill Acquisition Graduation",         category: "Programmes",  imageUrl: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=800&q=80", description: "Graduates of the 2024 Skill Acquisition cohort receive their certificates in Port Harcourt." },
    { title: "Community Peace Dialogue — Benue",     category: "Community",   imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80", description: "IPC mediators facilitating structured dialogue between community leaders in Benue State."     },
    { title: "UN Partnership Signing Ceremony",      category: "Partners",    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", description: "Formal signing of the IPC-UNDP co-delivery agreement at IPC Headquarters, Lagos."          },
    { title: "Talent Hunt Initiative Finals",        category: "Programmes",  imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80", description: "Youth performers compete in the national finals of IPC's Talent Hunt Initiative."          },
    { title: "Environmental Services Tree Planting", category: "Environment", imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", description: "IPC volunteers and community members plant 10,000 trees across Lagos and Ogun states."     },
  ];
  for (const g of gallery) {
    const existing = await prisma.galleryImage.findFirst({ where: { title: g.title } });
    if (!existing) await prisma.galleryImage.create({ data: g });
  }
  console.log("   ✓ 6 gallery images created\n");

  // ── 6. Videos ──────────────────────────────────────────────
  console.log("▶️  Creating video items...");
  const videos = [
    { title: "IPC Annual Impact Report 2024",         videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", description: "A full review of IPC's programmes, partnerships, and community impact across 2024."                        },
    { title: "Voices of Peace — Beneficiary Stories", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80", description: "Beneficiaries of IPC's Skill Acquisition, Community Peace, and Talent Hunt programmes share their stories." },
    { title: "Community Peace Movement Explainer",    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80", description: "An explainer on IPC's Community Peace Movement methodology and field approach."                           },
  ];
  for (const v of videos) {
    const existing = await prisma.videoItem.findFirst({ where: { title: v.title } });
    if (!existing) await prisma.videoItem.create({ data: v });
  }
  console.log("   ✓ 3 video items created\n");

  console.log("✅ Seed complete!");
  console.log("─────────────────────────────────────────────────────");
  console.log("   Admin:   admin@ipc.ngpage.com  / Admin@1234");
  console.log("   Editor:  editor@ipc.ngpage.com / Editor@1234");
  console.log("─────────────────────────────────────────────────────");
}

main()
  .catch((e) => { console.error("❌ Seed failed:", e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
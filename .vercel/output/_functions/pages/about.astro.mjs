import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_aX1uJ5VZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CPNHGPDs.mjs';
import 'clsx';
export { r as renderers } from '../chunks/_@astro-renderers_XaomTNl8.mjs';

const html = () => "<h1 id=\"tentang-kelas-810-smp-3-cikarang-utara\">Tentang Kelas 8.10 SMP 3 Cikarang Utara</h1>\n<p>Selamat datang di halaman kelas 8.10 SMP 3 Cikarang Utara! Kelas ini adalah tempat bagi para siswa untuk belajar dan berkembang. Kami berfokus pada pendidikan yang berkarakter, mempersiapkan siswa untuk menghadapi tantangan di masa depan dengan keterampilan akademik dan sosial yang kuat.</p>\n<h2 id=\"visi-kelas-810\">Visi Kelas 8.10</h2>\n<p>Menjadi kelas yang unggul dalam prestasi akademik dan karakter, dengan menciptakan lingkungan belajar yang penuh semangat dan kerja sama yang baik antara siswa, guru, dan orang tua.</p>\n<h2 id=\"misi-kelas-810\">Misi Kelas 8.10</h2>\n<ul>\n<li><strong>Meningkatkan kualitas akademik</strong> melalui pendekatan pembelajaran yang menyenangkan dan interaktif.</li>\n<li><strong>Mengembangkan sikap positif</strong> dan keterampilan sosial siswa, seperti kerjasama dan kepemimpinan.</li>\n<li><strong>Membina siswa menjadi pribadi yang bertanggung jawab, jujur, dan peduli terhadap sesama</strong>.</li>\n<li><strong>Menjalin hubungan yang erat dengan orang tua dan masyarakat sekitar</strong> untuk menciptakan lingkungan belajar yang mendukung.</li>\n</ul>\n<h2 id=\"kurikulum-kelas-810\">Kurikulum Kelas 8.10</h2>\n<p>Kelas 8.10 SMP 3 Cikarang Utara mengikuti kurikulum yang ditetapkan oleh Kementerian Pendidikan dan Kebudayaan, yang mencakup berbagai mata pelajaran wajib dan pilihan. <strong>Beberapa</strong> materi yang akan dipelajari di antaranya:</p>\n<ol>\n<li>\n<p><strong>Matematika</strong><br>\nMateri yang mencakup konsep dasar matematika dan penerapannya dalam kehidupan sehari-hari.</p>\n</li>\n<li>\n<p><strong>Bahasa Indonesia</strong><br>\nPembelajaran bahasa Indonesia dengan fokus pada kemampuan menulis, berbicara, dan mendengarkan.</p>\n</li>\n<li>\n<p><strong>IPA (Ilmu Pengetahuan Alam)</strong><br>\nMemahami prinsip-prinsip dasar ilmu pengetahuan alam melalui eksperimen dan teori.</p>\n</li>\n<li>\n<p><strong>IPS (Ilmu Pengetahuan Sosial)</strong><br>\nMengajarkan sejarah, geografi, dan ekonomi untuk memperkenalkan siswa pada dunia sosial.</p>\n</li>\n<li>\n<p><strong>Pendidikan Kewarganegaraan (PKn)</strong><br>\nMengenalkan siswa pada hak dan kewajiban sebagai warga negara yang baik.</p>\n</li>\n<li>\n<p><strong>Pendidikan Jasmani dan Olahraga (PJOK)</strong><br>\nMengembangkan keterampilan fisik dan pemahaman mengenai pentingnya hidup sehat.</p>\n</li>\n</ol>\n<h2 id=\"aktivitas-kelas-810\">Aktivitas Kelas 8.10</h2>\n<p>Selain kegiatan akademik, kelas 8.10 juga terlibat dalam berbagai aktivitas non-akademik untuk mengembangkan bakat dan minat siswa, antara lain:</p>\n<ul>\n<li>\n<p><strong>Kegiatan Ekstrakurikuler</strong><br>\nSeperti olahraga, seni, dan klub bahasa.</p>\n</li>\n<li>\n<p><strong>Kegiatan Sosial</strong><br>\nMengadakan bakti sosial dan kegiatan yang mendukung pengembangan karakter siswa.</p>\n</li>\n<li>\n<p><strong>Kegiatan Kelas</strong><br>\nDiskusi, proyek kelompok, dan pembelajaran berbasis proyek.</p>\n</li>\n</ul>\n<hr>\n<p>Terima kasih telah mengunjungi halaman tentang kelas 8.10 SMP 3 Cikarang Utara! Jika Anda ingin mengetahui lebih lanjut atau menghubungi pihak sekolah, silakan kunjungi halaman <a href=\"#\">Kontak</a> atau hubungi kami melalui email di <a href=\"mailto:smp3cikarangutara@gmail.com\">smp3cikarangutara@gmail.com</a>.</p>";

				const frontmatter = {};
				const file = "/home/ikhwan-satrio/project/kelas/src/markdown/about.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="font-sans w-full"> <!-- Section: Tentang Kelas --> <section class="w-full h-screen px-6 py-10 flex flex-col items-center justify-center gap-4 bg-[#111827]"> <h1 class="text-white text-3xl font-semibold tracking-wide">Tujuan.</h1> <p class="text-white text-lg mt-4 text-center max-w-2xl">
Kelas ini bertujuan untuk memberikan pemahaman mendalam tentang topik yang kami ajarkan. Kami menyatukan peserta dari berbagai latar belakang untuk berbagi pengalaman dan pengetahuan.
</p> </section> <!-- Section: Visi dan Misi Kelas --> <section class="w-full h-screen relative flex flex-col items-center gap-5 bg-gray-100 p-8 scrollbar-hide overflow-y-auto"> <div class="prose max-w-none my-auto z-10"> ${renderComponent($$result2, "Content", Content, {})} <!-- Konten tentang kelas yang diambil dari markdown --> </div> </section> </main> ` })}`;
}, "/home/ikhwan-satrio/project/kelas/src/pages/about.astro", void 0);

const $$file = "/home/ikhwan-satrio/project/kelas/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

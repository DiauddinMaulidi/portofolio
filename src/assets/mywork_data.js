import pdfpod from '../assets/project1.png'
import sid from '../assets/project2.jpg'

const mywork_data = [
    {
        w_no:1,
        w_name:"pdf podcast",
        slug:"pdf-podcast",
        w_img:pdfpod,
        w_jenis: "web",
        w_demo: "https://pdf-podcast-dusky.vercel.app",
        w_code: "https://github.com/DiauddinMaulidi/pdf-podcast",
        w_desc: `
            ⚙️ Teknologi yang Digunakan
                
            1. Next.js – Digunakan untuk membangun antarmuka aplikasi web yang interaktif dan responsif.
            2. Tailwind CSS – Digunakan untuk merancang tampilan antarmuka yang modern dan konsisten.
            3. LangChain – Digunakan untuk mengelola alur pemrosesan dokumen dan integrasi dengan model bahasa besar (LLM).
            4. Google Gemini API – Digunakan sebagai model Artificial Intelligence untuk pemrosesan bahasa alami dan chatbot.
            5. Pinecone Vector Database – Digunakan untuk menyimpan embedding dokumen serta melakukan pencarian informasi berbasis semantic search.
            6. Supabase Storage – Digunakan untuk menyimpan file dokumen yang diunggah oleh pengguna.
        `
    },
    {
        w_no:2,
        w_name:"Sistem Informasi Desa",
        slug:"Sistem-Informasi-Desa",
        w_img:sid,
        w_jenis: "web",
        w_demo: "",
        w_code: "https://github.com/DiauddinMaulidi/tembeng_putik_web",
        w_desc: `
            Perkembangan teknologi informasi memberikan peluang besar bagi pemerintah desa untuk meningkatkan kualitas pelayanan publik dan transparansi informasi kepada masyarakat. Namun, pada banyak desa, pengelolaan data dan penyampaian informasi masih dilakukan secara manual atau belum terintegrasi secara digital, sehingga seringkali menimbulkan permasalahan seperti kesulitan dalam pengelolaan data penduduk, lambatnya penyebaran informasi desa, serta keterbatasan akses masyarakat terhadap layanan administrasi.

            Berdasarkan permasalahan tersebut, dikembangkan sebuah Sistem Informasi Desa Tembeng Putik yang bertujuan untuk menyediakan platform digital yang dapat membantu pemerintah desa dalam mengelola data, menyampaikan informasi, serta meningkatkan efisiensi pelayanan kepada masyarakat.

            Sistem ini dirancang sebagai aplikasi berbasis web yang memungkinkan perangkat desa untuk mengelola berbagai informasi penting seperti data penduduk, berita desa, kegiatan desa, serta layanan administrasi secara terpusat. Selain itu, masyarakat juga dapat mengakses informasi desa secara mudah melalui platform ini tanpa harus datang langsung ke kantor desa.

            Dengan adanya sistem ini, diharapkan proses pengelolaan data dan penyebaran informasi di Desa Tembeng Putik dapat menjadi lebih efisien, transparan, dan terorganisir, serta mampu mendukung upaya digitalisasi layanan pemerintahan di tingkat desa.
        `
    },
]
 
export default mywork_data;
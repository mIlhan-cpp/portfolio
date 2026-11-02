export interface SkillGroup { name: string; blurb: string; items: string[] }
export const skills: SkillGroup[] = [
 { name:'AI & Generative AI', blurb:'LLM-powered apps, retrieval and agent-style workflows.', items:['LLM Integration','Generative AI','RAG','Agentic Workflows','Embeddings','FAISS','Hugging Face','Gemini','PyTorch'] },
 { name:'Development', blurb:'Front to back web and mobile applications.', items:['Python','JavaScript','TypeScript','React','Next.js','Node.js','FastAPI','React Native'] },
 { name:'Databases & Backend', blurb:'Data storage and APIs behind the interface.', items:['PostgreSQL','MongoDB','Supabase','REST APIs'] },
 { name:'Data Science & Computer Vision', blurb:'Analysis, forecasting and real-time vision.', items:['Pandas','OpenCV','MediaPipe','ARIMA','Model Training','Model Evaluation','Power BI'] },
 { name:'Tools & Automation', blurb:'Shipping, automating and deploying.', items:['Docker','n8n','Git','Shopify','Vercel'] }]
export const marquee = [['Python','JavaScript','TypeScript','C++','React','Next.js','Node.js','FastAPI','PostgreSQL','MongoDB'],['Supabase','PyTorch','Hugging Face','Gemini','FAISS','LangChain','Docker','n8n','OpenCV','Power BI']]

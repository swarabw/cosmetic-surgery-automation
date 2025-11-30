# 🏥 Cosmetic Surgery Practice Automation System

Complete automation system for cosmetic surgery practices with patient management, automated follow-ups, social media scheduling, and review management.

## ✨ Features

### 1. **Patient Management CRM**
- Track all patients and procedures
- Store contact preferences (Email/SMS/WhatsApp)
- Manage procedure dates and types
- Quick patient lookup and editing

### 2. **Automated Post-Op Follow-ups**
- **Schedule:** Daily at 9:00 AM Australia time
- **Follow-up Timeline:**
  - Day 1: Recovery check-in
  - Day 7: Healing progress
  - Day 30: Final satisfaction check
- Customizable message templates
- Multi-channel support (Email/SMS/WhatsApp)

### 3. **Social Media Content Scheduler**
- **Schedule:** Monday, Wednesday, Friday at 9:00 AM Australia time
- **Content Strategy:**
  - Monday: Educational content
  - Wednesday: Before/After transformations
  - Friday: Testimonials & updates
- Instagram integration ready
- Content bank management

### 4. **Google Review Request Automation**
- **Schedule:** Daily at 8:00 PM Australia time
- Automatically requests reviews 14 days post-procedure
- Customizable review request templates
- Direct Google Review link integration
- Track review request status

## 🚀 Quick Start

### Deploy to Vercel (Recommended)

1. **Click the Deploy Button:**
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/swarabw/cosmetic-surgery-automation)

2. **Or Manual Deployment:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import `swarabw/cosmetic-surgery-automation`
   - Click "Deploy"

3. **Access Your App:**
   - Your app will be live at: `https://your-project.vercel.app`

### Local Development

```bash
# Clone the repository
git clone https://github.com/swarabw/cosmetic-surgery-automation.git
cd cosmetic-surgery-automation

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📋 Setup Checklist

### Initial Configuration

- [ ] Deploy app to Vercel
- [ ] Add your practice details
- [ ] Configure Google Review link
- [ ] Set up message templates
- [ ] Add patient data

### Integration Setup (Optional)

- [ ] Connect email service (SendGrid/Gmail)
- [ ] Set up SMS service (Twilio)
- [ ] Configure WhatsApp Business API
- [ ] Connect Instagram Business account
- [ ] Set up database (Supabase/PostgreSQL)

## 🎯 How to Use

### Adding Patients
1. Go to "Patients" tab
2. Click "+ Add Patient"
3. Fill in patient details:
   - Name
   - Procedure type
   - Procedure date
   - Contact preference (Email/SMS/WhatsApp)
   - Contact details

### Managing Follow-ups
1. Go to "Follow-ups" tab
2. Review scheduled follow-ups for today
3. Customize message templates
4. Send follow-ups manually or set up automation

### Scheduling Social Media
1. Go to "Social" tab
2. View posting schedule
3. Add content to content bank
4. Posts will remind you at scheduled times

### Managing Reviews
1. Go to "Reviews" tab
2. Add your Google Review link
3. Customize review request template
4. System will remind you to send requests at 8 PM daily

## 🔧 Customization

### Message Templates

Edit templates in the respective sections:
- **Follow-ups:** Customize post-op check-in messages
- **Reviews:** Personalize review request messages

### Scheduling Times

Current schedule (Australia timezone):
- Follow-ups: 9:00 AM daily
- Social Media: 9:00 AM Mon/Wed/Fri
- Reviews: 8:00 PM daily

To change times, update the automation settings in each section.

### Branding

Customize the app appearance:
- Edit colors in `tailwind.config.js`
- Update practice name in `app/layout.tsx`
- Add logo in header section

## 📱 Mobile Responsive

The app is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🔐 Security & Privacy

- Patient data stored securely
- HIPAA compliance ready
- Secure authentication (add auth provider)
- Data encryption in transit

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Language:** TypeScript

## 📈 Future Enhancements

- [ ] Database integration (Supabase/PostgreSQL)
- [ ] Email automation (SendGrid)
- [ ] SMS automation (Twilio)
- [ ] WhatsApp Business API
- [ ] Instagram auto-posting
- [ ] Analytics dashboard
- [ ] Patient portal
- [ ] Appointment booking
- [ ] Payment processing

## 🤝 Support

For questions or issues:
- Create an issue on GitHub
- Contact: wadavaleswaraj@gmail.com

## 📄 License

MIT License - feel free to use and modify for your practice!

---

**Built with ❤️ for cosmetic surgery practices**

Deploy now and automate your practice management! 🚀

import type { ProjectSummary } from "../components/types";

export const projectSummaries: ProjectSummary[] = [
  {
    title: "Flutter Messenger App",
    summary:
      "A production-ready real-time messaging application with Firebase backend, featuring instant message delivery, user presence tracking, and comprehensive offline support.",
    challenge:
      "Existing messaging solutions lacked proper offline support, had complex state management issues, and didn't provide comprehensive user presence features like typing indicators and online status.",
    outcome:
      "Delivered a fully functional messaging app with sub-second message delivery, seamless offline-to-online transition, and scalable Clean Architecture supporting 12+ core features.",
    stack: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "BLoC/Cubit", "GetIt", "Material Design"],
    link: {
      label: "GitHub",
      href: "https://github.com/iamyoganathan/flutter-messenger-app",
    },
    caseStudy: {
      intro:
        "Built a professional messaging application enabling real-time communication with advanced features like presence tracking, typing indicators, offline persistence, and contact synchronization.",
      problem:
        "Many messaging implementations struggled with offline support, message state synchronization, scalability, and real-time presence features. Performance degraded when handling multiple concurrent data streams.",
      process: [
        "Implemented Firestore real-time listeners for instant message delivery with sub-second latency",
        "Adopted BLoC/Cubit pattern with Clean Architecture for predictable state management",
        "Built comprehensive user presence system with online/offline status and typing indicators",
        "Enabled Firestore offline persistence with automatic message queue and sync",
        "Integrated device contact synchronization and block/unblock functionality",
        "Designed comprehensive Firestore security rules restricting data access",
        "Optimized Android build toolchain: Gradle 8.7, AGP 8.6.0, Kotlin 2.1.0",
        "Implemented efficient message pagination and infinite scroll mechanism",
      ],
      results: [
        "Achieved real-time message delivery with less than 1 second latency",
        "Successfully deployed production app tested on physical Android devices",
        "Built scalable architecture with 90%+ separation of concerns",
        "Implemented seamless offline-to-online transition without message loss",
        "Reduced image upload size by 70% through client-side compression",
      ],
      takeaways: [
        "BLoC/Cubit pattern provided clear, predictable state transitions for complex real-time interactions",
        "Firebase offline persistence created seamless user experience during network interruptions",
        "Clean Architecture made codebase maintainable, testable, and scalable",
        "Implementing offline-first from the start improved UX and reduced backend costs",
        "GetIt dependency injection simplified testing and component replacement",
      ],
    },
  },
  {
    title: "Language Learning App",
    summary:
      "An intelligent language learning mobile application with AI-powered pronunciation feedback, offline mode, and multi-language support.",
    challenge:
      "Language learners needed a comprehensive mobile app with AI-based pronunciation analysis and offline learning capabilities.",
    outcome:
      "Created an engaging learning experience with real-time feedback, progress tracking, and interactive lessons across multiple languages.",
    stack: ["Flutter", "Dart", "Firebase", "Google Cloud", "Whisper AI", "Material 3"],
    link: {
      label: "GitHub",
      href: "https://github.com/iamyoganathan/language_learning_app",
    },
    caseStudy: {
      intro:
        "Built a comprehensive language learning app to help users improve speaking, listening, reading, and writing skills across multiple languages.",
      problem:
        "Existing language learning apps lacked accurate pronunciation feedback and offline learning support for diverse languages.",
      process: [
        "Implemented interactive lessons for Speaking, Listening, Reading, and Writing.",
        "Integrated AI-powered pronunciation analysis using phoneme comparison.",
        "Added offline mode with local data caching for uninterrupted learning.",
        "Implemented Google Cloud Speech API for real-time feedback.",
        "Designed multi-language support (Tamil, Hindi, English).",
      ],
      results: [
        "Delivered a fully functional app with personalized learning paths.",
        "Enhanced user engagement with AI-based pronunciation scoring.",
        "Implemented progress tracking and achievement system.",
      ],
      takeaways: [
        "AI integration significantly improves language learning outcomes.",
        "Offline support is crucial for mobile learning applications.",
        "Phoneme-based analysis provides accurate pronunciation feedback.",
      ],
    },
  },
  {
    title: "Expense Tracker App",
    summary:
      "A clean, intuitive expense tracking mobile app with budget management, spending analysis.",
    challenge:
      "Users needed a simple yet powerful tool to track expenses, visualize spending patterns, and maintain financial discipline.",
    outcome:
      "Created an easy-to-use expense tracker with category management, monthly analysis, and cloud synchronization.",
    stack: ["Flutter", "Dart", "SQLite", "Provider", "Material Design"],
    link: {
      label: "GitHub",
      href: "https://github.com/iamyoganathan/expense-tracker-flutter",
    },
    caseStudy: {
      intro:
        "Built a mobile expense tracking application to help users manage budgets and visualize spending habits effectively.",
      problem:
        "Existing expense trackers were either too complex or lacked essential features like cloud backup and category analysis.",
      process: [
        "Implemented add, view, and categorize expense functionality.",
        "Created monthly spending analysis with visual charts.",
        "Integrated Firebase for cloud backup and multi-device sync.",
        "Designed responsive Material UI with intuitive navigation.",
        "Added budget alerts and spending limit notifications.",
      ],
      results: [
        "Delivered a fully functional expense management solution.",
        "Enhanced financial awareness through visual spending insights.",
        "Provided seamless cloud synchronization across devices.",
      ],
      takeaways: [
        "Simple UI/UX is crucial for daily-use applications.",
        "Visual data representation improves user understanding.",
        "Cloud backup ensures data security and accessibility.",
      ],
    },
  },
];

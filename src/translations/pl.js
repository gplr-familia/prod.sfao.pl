import polishMessages from 'ra-language-polish';

const messages = {
  components: {
    notifications: {
      confirmButton: {
        label: "Akceptuj"
      },
      declineButton: {
        label: "Usuń"
      }
    },
    recommendations: {
      doneButton: {
        label: 'Oznacz jako wykonane'
      },
      notDoneButton: {
        label: 'Oznacz jako niewykonane'
      }
    }
  },
  notifications: {
    info: {
      recommendations: {
        title: 'Przypomnienie',
        text: 'Pamiętaj żeby wykonać zalecenie dotyczące %{name} %{value} %{unit}'
      }
    }
  },
  menu: {
    diagrams: {
      name: 'Wykresy aktywności',
    },
    calendar: {
      name: 'Kalendarz',
    },
    dashboard: {
      name: 'Panel główny',
    },
    chats: {
      name: 'Czat'
    }
  },
  resources: {
    users: {
      name: 'Użytkownik |||| Użytkowników',
      menu: 'Użytkownicy',
      fields: {
        email: 'Adres email',
        fullname: 'Pełna nazwa użytkownika',
        username: 'Nazwa użytkownika',
        plain_password: 'Hasło użytkownika',
        enabled: 'Logowanie włączone',
        gender: 'Płeć',
        phone: 'Telefon',
        date_of_birth: 'Data urodzenia',
        groups: 'Grupy',
        patients: 'Pacjenci',
        doctors: 'Lekarze',
      },
      custom: {
        options: {
          gender: {
            male: 'Mężczyzna',
            female: 'Kobieta',
          },
        },
      },
    },
    devices: {
      name: 'Urządzenie |||| Urządzeń',
      menu: 'Urządzenia',
      fields: {
        name: 'Nazwa',
      },
    },
    groups: {
      name: 'Grupa |||| Grup',
      menu: 'Grupy',
      fields: {
        description: 'Opis',
        name: 'Nazwa',
        roles: 'Uprawnienia',
        users: 'Użytkownicy',
      },
      custom: {
        roles: {
          role_super_admin: 'Super administrator',
          role_admin: 'Administrator',
          role_user: 'Użytkownik',
          users_list: 'Przeglądanie użytkowników',
          users_show: 'Pokazywanie użytkownika',
          users_edit: 'Edytowanie użytkownika',
          users_edit_groups: 'Edytowanie grup użytkownika',
          users_edit_patients: 'Edytowanie pacjentów użytkownika',
          users_edit_doctors: 'Edytowanie lekarzy użytkownika',
          users_create: 'Tworzenie użytkowników',
          groups_list: 'Przeglądanie grup',
          groups_edit: 'Edytowanie grup',
          groups_create: 'Tworzenie grup',
          groups_edit_users: 'Dodawanie użytkowników do grup',
          recommendations_edit: 'Edytowanie rekomendacji',
          recommendations_create: 'Tworzenie rekomendacji',
          recommendations_list_users: 'Lista rekomendacji kolumna użytkownik',
          recommendations_list_user_in_groups: 'Lista rekomendacji kolumna użytkownik w grupach',
          recommendations_show_user: 'Przeglądanie rekomendacji pole użytkownik',
          measurement_types_list: 'Lista typów pomiarów',
          measurement_types_edit: 'Edytowanie typów pomiarów',
          measurement_types_create: 'Tworzenie typów pomiarów',
          measurements_list_users: 'Lista pomiarów kolumna użytkownik',
          measurements_list_user_in_groups: 'Lista pomiarów kolumna użytkownik w grupach',
          measurements_create_users: 'Tworzenie pomiaru pole użytkownik',
          measurements_edit_users: 'Edytowanie pomiaru pole użytkownik',
          media_objects_list: 'Lista mediów',
          information_from_patient_create: 'Tworzenie informacji dla pacjenta',
          information_from_patient_list_users: 'Lista informacji dla pacjenta kolumna użytkownicy',
          imaging_examinations_create: 'Tworzenie badań obrazowych',
          imaging_examinations_list_users: 'Lista badań obrazowych kolumna użytkownicy',
          imaging_examinations_show_users: 'Widok badania obrazowego kolumna użytkownik',
          device_list: 'Lista urządzeń',
          device_edit: 'Edycja urządzenia',
          device_create: 'Tworzenie urządzeń',
          appointments_list: 'Lista wizyt',
          appointments_create: 'Tworzenie wizyt',
          appointments_edit: 'Edycja wizyt',
          diet_recommendations_list: 'Lista zaleceń dietetycznych',
          diet_recommendations_create: 'Tworzenie zaleceń dietetycznych',
          diet_recommendations_edit: 'Edycja zaleceń dietetycznych',
          meals_list: 'Lista posiłków',
          meals_create: 'Tworzenie posiłków',
          meals_edit: 'Edycja posiłków',
          drugs_list: 'Lista leków',
          drugs_create: 'Tworzenie leków',
          drugs_edit: 'Edycja leków',
          physical_efforts_list: 'Lista wysiłów fizycznych',
          physical_efforts_create: 'Tworzenie wysiłków fizycznych',
          physical_efforts_edit: 'Edycja wysiłków fizycznych',
          summaries_list: 'Lista podsumowań tygodniowych',
          summaries_create: 'Tworzenie podsumowań tygodniowych',
          summaries_edit: 'Edycja podsumowań tygodniowych'
        },
      },
    },
    measurements: {
      name: 'Pomiar |||| Pomiarów',
      menu: 'Pomiary',
      fields: {
        type: 'Typ pomiaru',
        value: 'Wartość pomiaru',
        at: 'Data',
        at_time: 'Godzina',
        user: 'Użytkownik',
        device: 'Urządzenie',
        groups: 'Grupy użytkownika',
        user_in_groups: 'Użytkownik w grupach'
      },
    },
    measurement_types: {
      name: 'Typ pomiaru |||| Typy pomiarów',
      menu: 'Typy pomiarów',
      fields: {
        icon: 'Ikona',
        name: 'Nazwa',
        unit: 'Jednostka',
        description: 'Opis',
        color: 'Kolor',
        attachment: 'Załącznik',
        'attachment.content_url': 'Załącznik',
      },
    },
    recommendations: {
      name: 'Zalecenie |||| Zaleceń',
      menu: 'Zalecenia',
      fields: {
        type: 'Typ pomiaru',
        value: 'Wartość pomiaru',
        user: 'Użytkownik',
        at: 'Zalecona data',
        at_time: 'Zalecona godzina',
        ends: 'Zalecona data końca',
        ends_time: 'Zalecona godzina końca',
        whole_day: 'Cały dzień',
        recurring_day_of_week: 'Powtarzaj w dni',
        recurring_from: 'Powtarzaj od',
        recurring_to: 'Powtarzaj do',
        groups: 'Grupy użytkownika',
        user_in_groups: 'Użytkownik w grupach'
      },
      custom: {
        recurring_day_of_week: {
          monday: 'Poniedziałek',
          tuesday: 'Wtorek',
          wednesday: 'Środa',
          thursday: 'Czwartek',
          friday: 'Piątek',
          saturday: 'Sobota',
          sunday: 'Niedziela',
        },
        status: {
          evaluate: 'Do rozwiązania',
          done: 'Zrobione',
          not_done: 'Nie zrobione',
        }
      },
    },
    'threads/my': {
      name: 'Wątek |||| Wątków',
      menu: 'Wątki',
      fields: {
        user: 'Odbiorca',
        subject: 'Tytuł wątku',
        body: 'Treść',
      },
      custom: {
        list: {
          secondaryTextPrefix: 'Stworzony przez ',
        },
        show: {
          reply: {
            hintText: 'Odpowiedź',
            floatingLabelText: 'Odpowiedź',
            send: 'Wyślij',
          },
          attachment: 'Załącznik',
        },
      },
    },
    messages: {
      name: 'Wiadomość |||| Wiadomości',
      menu: 'Wiadomości',
      fields: {
        body: 'Wiadomość',
        created_at: 'Data stworzenia',
      },
    },
    media_objects: {
      menu: 'Media',
    },
    imaging_examinations: {
      menu: 'Badania obrazowe bądź laboratoryjne',
      name: 'Badanie obrazowe bądź laboratoryjne |||| Badań obrazowych bądź laboratoryjnych',
      fields: {
        user: 'Użytkownik',
        attachment: 'Załącznik',
        description: 'Opis',
        at: 'Data',
        at_time: 'Godzina',
        'attachment.content_url': 'Załącznik',
      },
    },
    information_for_patients: {
      menu: 'Informacje dla pacjenta',
      name: 'Informacja dla pacjenta |||| Informacji dla pacjenta',
      fields: {
        user: 'Użytkownik',
        attachment: 'Załącznik',
        description: 'Opis',
        at: 'Data',
        at_time: 'Godzina',
        'attachment.content_url': 'Załącznik',
      },
    },
    appointments: {
      menu: 'Wizyty',
      name: 'Wizyta |||| Wizyt',
      fields: {
        description: 'Opis',
        patient: 'Pacjent',
        doctor: 'Doktor',
        at: 'Kiedy',
      },
    },
    diet_recommendations: {
      menu: 'Zalecenia dietetyczne',
      name: 'Zalecenie dietetyczne |||| Zaleceń dietetycznych',
      fields: {
        user: 'Pacjent',
        at: 'Kiedy',
        description: 'Opis',
        at_time: 'Godzina',
      },
    },
    meals: {
      menu: 'Posiłki',
      name: 'Posiłek |||| Posiłków',
      fields: {
        user: 'Pacjent',
        at: 'Kiedy',
        description: 'Opis',
        at_time: 'Godzina',
      },
    },
    drugs: {
      menu: 'Leki',
      name: 'Lek |||| Leków',
      fields: {
        user: 'Pacjent',
        at: 'Kiedy',
        description: 'Opis',
        at_time: 'Godzina',
      },
    },
    physical_efforts: {
      menu: 'Wysiłki fizyczne',
      name: 'Wysiłek fizyczny |||| Wysiłków fizycznych',
      fields: {
        user: 'Pacjent',
        at: 'Kiedy',
        description: 'Opis',
        at_time: 'Godzina',
      },
    },
    summaries: {
      menu: 'Podsumowania okresowe',
      name: 'Podsumowanie okresowe |||| Podsumowań okresowych',
      fields: {
        user: 'Pacjent',
        starts: 'Od',
        ends: 'Do',
        description: 'Opis',
        starts_time: 'Od',
        ends_time: 'Do',
      },
    },
  },
  dashboard: {
    title: 'Panel główny',
    recommendations: {
      title: 'Dzisiejsze zalecenia',
      more: 'Więcej',
    },
    recommendationsToEvaluate: {
      title: 'Zalecenia do uzupełnienia',
      more: 'Więcej',
    },
    activities: {
      title: 'Dzisiejsze aktywności',
      more: 'Więcej',
    },
    threads: {
      title: {
        doctor: 'Wiadomości od pacjentów',
        patient: 'Wiadomości od specjalistów',
      },
      more: 'Więcej',
    },
    drugs: {
      title: "Zalecenia dotyczące leków",
      more: 'Więcej',
    },
    appointments: {
      title: "Wizyty",
      more: 'Więcej',
    },
    diet_recommendations: {
      title: "Rekomendacje dotyczące jedzenia",
      more: 'Więcej',
    },
    inputs: {
      userEmpty: 'Wybierz użytkownika'
    }
  },
  views: {
    diagrams: {
      chart: {
        recommendation: 'Zalecenie',
        activity: 'Aktywność',
        norm: 'Norma',
      },
      inputs: {
        from: 'Data od',
        to: 'Data do',
        user: 'Użytkownik',
        userEmpty: 'Wybierz użytkownika',
      }
    },
    calendar: {
      inputs: {
        user: {
          empty: 'Wybierz użytkownika'
        },
      },
      section: {
        summary: {
          title: 'Podsumowanie',
          inputs: {
            summaryStarts: 'Od',
            summaryEnds: 'Do',
            description: 'Opis',
            placeholders: {
              description: 'Opis'
            }
          }
        }
      }
    }
  },
};


export default {
  pl: {...messages, ...polishMessages},
};

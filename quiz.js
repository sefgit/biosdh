const fxTheme = "";  // "game", "soft", "power" (default: "power")

const quizTimeoutInSeconds = 30; 

const quizA = [
    "https://docs.google.com/presentation/d/e/2PACX-1vQeF37qaUDq0nz2A97KDchSeD59PeN3n4Fb7JdNua8SA5CCeafu8gYP3_zY-4K-voqdKRij4lina1K-/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vT6MNBpEDvaNAz51yri8fOsQ0BeAvlZ21XvSsy_P1J_Xz5mug_kWDF0ROrAWD90AvrrOyKBO0Tp26jm/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQIzHiDYg-bs2XYWznMyWkj6iPwVd7XzxDwJ8ytMRzdgxN7ivIx4m2-1Mx2E3EqfVaQ40H9GkqssIi-/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vTTQOtJE4FM44oHr1DdUVEfSWp3Rek7xTGvIMtB0uw_rYfsKqucXVSojfGfdaqrShljzmTNf6Xti9TV/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vSAffKnc4ksQky3XEsToyY-H6kz6a4cc_pcmwaP_Uy6uvjjNZN71hB5BU0adZnjMzXqMNzCfCXr-l04/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vSWgtmq9iH2MSz1WEBh3-K7_2MSN4pXAb-tlE4AegyW4oQkUQEk0WxqxvkPhZ4VpW4XK-uGAIEO9Pss/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vTc1oJUrHKhcvxRIu3ZnR0-YX6MHK40w4QVGMJFlEeM_o65yYanfxHyLiwmtHXBIPwnnHq5MVb1Adh3/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vS_1XYacFGkGayBCJOyIOSAljiOK2cDMdxs8Ha9u7EOwP9HupU9LL97vq4LCQ0jIZZXrJn_Vwhmej6P/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vRtzYdIawoKbgQi2kpl3g5A7oMlRcLYpT8tC2-ws-XF0lTO2fprEjHL7h6baKoR9m_XufjCklVApcyv/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vT6CLOHyfoiLHXSorRyAwofQnGnxlNpy2-pg_FP_aEhY9NrQi8LDGVfkKB8t2aslpMuisztrewfBI58/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vT8A6YpUcU8pTWMdM_-gKqQWgERA0yzYVYPud1SxDPHJr0rmrB2jku2StnTxKE2aapIBdzRmIViwBhU/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQDSoCJWeN7_bC8SuMbEp6LJiB9OiyoC0EruLB9XShQDcIFcwpwVnEzjHrIdP9N_1-rkD3xIlnO2zKm/pub?start=false&loop=false&delayms=3000"
];
const quizT = [
    "https://docs.google.com/presentation/d/e/2PACX-1vRJuI3H9AjFKQ009hklOUsiMSNOybZdUuegxrCHt3ONgzoT0Qz_aFZY1zwj3o9xCwOh5Zgxpu-J_Zqf/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vR8F8JIaNJZoIGl5YtIDaaIkhRLsPVq6_m4SsZG_aRApYrUQ_q069dh_wnL8RWaaS_IPNQQknBVWX6s/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vROLtcm3_JM-cEy44yzF572eo9RryIVjz20sMOJIJCxlExZNAl-FtOIVJ8bL60qpItcMWIyjnXew5je/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vTbWhKHi5v4MrlUraPFqnklpLrMhi3sE6NhjuyNbNKLWC5J7QMZofuBAryBJkcQge73fuRhmyQV7kpj/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQEehCZgW7Z0bl2JGy95fQb4hrM4j-OSa7UCA0SoZeIwZiIZF3zuxo8YF_koJ1zlDvWRq1fHSK1qpFR/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQAsEKpkcytdCAE8PqfE7bDSfMM8BSehJSCjTzdujGQ_jomEhCyRTZlm1GZpZUjLXkwGxguj8KsyKTI/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vS0wY43gr_SO3VEsmFZCpbF7gPnpUaH3uf3jZ_2TizRAKVsI9kb8JqJ1O0q30rUP0fsd8ZhhLjoJRC9/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQT2NKhg6bRvzjfsCvN_2fjAynDLTz8nAnqt9nlmqbfj2wHnDV4xwkVsNYfjGLPQxyvGLrx_tnnhnk2/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vRarjlr3ztBplbfrn-gNrS1rnphDrPsXoe4ld7O6GPXGPDGg7Y2mn6hzEs9y35idAC5xmCxWvzXo0Hq/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vTXak_u22VT5PRe2Wfh2AyatVQXBZkLL1Wf7bGJ7ih5fJZfOQ-FT6an8Yw_vmE5ig0qD08x98KxiE9d/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vTXak_u22VT5PRe2Wfh2AyatVQXBZkLL1Wf7bGJ7ih5fJZfOQ-FT6an8Yw_vmE5ig0qD08x98KxiE9d/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vTpTmtiAzuzKEFX02HVRXtr1u44sBrBuV6eiM-pPUaCPz4jHcvEQioixoIXQp5YGXOzhxLvF9Nf1qE7/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vTXDmOh46x6xKNHDc9bH2yI5Nn-B2o-oi9wiN10x7nJV5JkWGqMIobS4aTF8jAzYVRyTQNVNLepOS74/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vRU2AJr2m38YlWAy9jKN6tRw8OD95IHxWssjyfMbsW-vES6_bBVvQTXiRHkkk1n_yxcjXaW4x8TAnRU/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vSlL7FIJMTekrQ15RaGFa60BNO2kmvrTDKi-BnzJRA_MFGllFthiHk7rA74yaXbijjYRyG0JdgFI8Kp/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vSycFHBQo9h_hTVN8F8meyURi91QQcnTYRXrJqj_eoTU5HwE5ii4AsEOo1nbjrMhuQKBRQjhK03OUUV/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vSVehfwXfbLWQmEN5UE9kb-ItYqs9VhbQ2pbI8u6Gi9DezosoEmueBDtR2ILRjCWj8LHi9gr1s_UHoj/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vSjyA1vORAAdisQrLA9XKCHbZYomZmwvCbX7Lt-mav6pZf0l92SJqowulJD9F1lPRKUgVTuZ8tOswRK/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQdw2q7aj-sbgST4TFniAu3b33Z5JGoq5PQOqOWOCeo9EMm8cTRIJ4QNvOOnFdQqhktdip5B2SMb8bM/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vRNUr54sq5x4h9_WZnkyHGSl2vvjOxGlSt9bIwh_dbhmA-894N70wnfDDeLxTolVH23IDz7OyP_1X2f/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQMr-zXBOREZQ_VDk4waBuezWE5HKhGbkpZLnKFJJZ0t88zILaHDr267atyGWfULtzV3sFJ1gOrftiV/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQG3pHzq0llHymnwMQyDytOK3fI5AnE3boSJu7x0O4-Wmm-omkflkyq0tYibXWTWpsLaem93E7kbOCY/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQE4xpbpu8l8im4KxKrEMRpfBsebVrEk34bqrKYzP691SHIGACyKL1x10N20uHUHuIRzYU3-OT0yKJA/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vSpAvFfhYPC82ctwOLp9b7I9Si9P42TsyPPgDrt8uLyHo8rnYsg_zk4JjJaP159aXIo1cXUMEZqtUIF/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vTlq3ZFRZd_1oJLSIClwaeNhqzAXaRnSzi8mSi2SDl35mH9EYHvfoDHWdfXqHDoPCdUQc6iVt11kKQt/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vRGb4G-sxB9kgnsQfVk1r-Rz1zrnojvFPkP16HnrbegR7vKgloSDqLNq_f18stibjnKMozvOXHJnQVp/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQ-Kqcpcp2sI7mSmmLZRVPfxfaIFnbf04QxrxFmzVZf2VN1nwZYTJoauzQQ12OiXRKbTA_xsZMhOhSc/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQTA3E-KCDn6wIhEKWEht8T7HsdX6Ta0IG-xxL3dvDxO3uJIyD9qLY_RTmtoxdC1gp4eJI6nJdba8xf/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vRssBg1ZbQvrUf7ZcksDeRgMa_dfF5z8QDaFBy0K2xY6n0wRzP1bjnCgJUgOBIbfeP3CM6EykMSv31p/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQu_woej7g9SF03FdHrNY0Xmb00iZusn8d5FNY5qcfGujM5mbzyb-a7VajBAdDuzFaFI6rNh8-ng0qn/pub?start=false&loop=false&delayms=3000"
];

const quizC = [
    "https://docs.google.com/presentation/d/e/2PACX-1vTGdBLuSIuIV73slEqnihNi66yMPpAJJSzJ_oPKXfS4TPd568lo2_clWvnqtArJvChgpGoxwCpJz2fr/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vS2IFKjooQqyw5YmFLF1MYE9pT_KOsAtS5pCDCVK8AZ9fGgg-Pu9KPNAJuCxKZVUh0xbIHDfOexvBSk/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vR9VSrrmLnaO0-1MxGARXbm7Tt1a0CGMw4pJ1G7rrzHpJKHCa9ECZukwoQWz-RCwq51Ft6aPv3H9RaS/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQirgZFRex9uobvbxRdlJ6KTbdhUkeZBhOGCqOAiQgn5gHkGqYtYqrzIaUGhXR3H2UploMtuUTChldq/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vRSyQW8NEJ0yx1xN43s2YOVWyFAC58yaHH9OuClAT-Ol6Dt21d3-46T4eTlBuRPzSnmEXQn2zyiGF5i/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vR8_WKAa7G-E8OZ23j3Ndt5LWjVzVa-ahhYH6nwnzQn4UdFYCgu5iyZE4ttJQZo36RGwgyVpWYkrHMm/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQkgvpAgwUsOyZG52AJgA4Sr6tPKIKL04OTv4fTd64ORjWdR0v_PsIhIvDG1aOn6sDdjYA5B5hkOKoM/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vSa1oXb9QF94pEIbDOZvhBufrxMWt7M0Ipn8F2VxasS61qn8hG716YZgCRmB2_UuynFZEgnyxsoZR_l/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vSclI-T5uHs-ieQRuLyetRn0yzCwgRMPksu9X_a02WfYZdhG8e44ZEcB6XEYbpvw9MfOzyXCMNnToIy/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQDgNN_ZzHtzuQE4IEU-ct0J9nThm5KSahA6k_YJv3bOrdRycnDswGHDLWXvcoAeDLrRkevyvLS78kT/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vRf0thtm89v8p_CS_7n-_GI8bPtUw0sGufkbAV3vzi-_krAiOk_8nY_Aa-wDb88o46yZ1BD_ZdQhKru/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vTu3qQjnacAIqqJ-9WanHxrqxcyCJvkWO_901KXKCIBdNHiW0toENZbsNPU4Ct5LU7u_OHbIiCKDmGs/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vR8n7sCdsqdilAoumAvs6UWejPaNhqmy37zcuoYr2uDQagiKhJjciza_SkGdURMXO8OtsF_qWbF3IhZ/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vSeEvS3VKdnIcXzLVCzaLo3Sjto-VHpHzn2qJC2cFKjED8Cvr4XMHF9I7xo342IFxF4jbmx1clxa6uB/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQLaVDpZtiTIfOqJ8saftVPNfWLrZnBUwLxuwJyL_6umugvNLk9ZZmB6J40-y2bVP7G9yjDPQf5azB6/pub?start=false&loop=false&delayms=3000"
];

const quizG = [
    "https://docs.google.com/presentation/d/e/2PACX-1vRl-nOZ0wnLkmovCHF7JPzY7m_aBuh9va1M-7sJGSKB5KsIb-vFt470hXz2XuqA5up3rgqzhip34edv/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vSOAzes09IrnHBDQ6AWRWTKoPz8wSC-c5BQK7w0XzglgReClDxAgTl7_35NJ_2dISPX8mxT7XOpY4p0/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vRrhrNkkd_FbKEiqF8aROYf1-pot3PcS_EdVU3vW3e8YGjOQZVZILHm55XI8lHyh91jatwY0_vj6mtB/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vShmeQMpL9zU0IXqmJ0QFHwmHnyLi6sZKNXV7a6RA79xrgmPrD2_Q1bCrDqGdzdyZOYLXecwOzx1clt/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQAs387GTYmW6k7gRIJFfaTY_LOJtelXhAsKEroZLEQ8WXuWQ0CMc3iU9R_rjzeAsBFDa2llQOxepKB/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQhT279v-fowf2F_1xvHuruVyjgwv8C65ypJy3sPvz-Jgz4te2VFKIjfy9zwmRcLvuzE8C7ZjmgruLF/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vRGhV4j3jdjqOJkYlbUnipRrRj6DuWkJ_e8-l15hyphPJl-m0vURzd08QPnsVgeJxrZAuaTAU5bAnKH/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQJ8zYYz7LxWkrHwOJOttd1jzHh7Dpvfizo5QDdIXPvVfFqlO3TIAcMrpFH9IWF1YHFat3MjEcmc1ag/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQV_9TFivApclXo86gFfq34_pYC2HmQwkK-u0T5eImPn1uFgJmIc5t8BtZSxDW4hKAdCMwfgc_Bo2HL/pub?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vRA_2waeKiuqZtegexrL_gM3omnY1apT2dfba0L9cQPEbaIutD-ke51EnOjKgCcVRunfc7F-0hCtFf_/pub?start=false&loop=false&delayms=3000"
];

const intros = [
    "https://docs.google.com/presentation/d/e/2PACX-1vQVNZqPHj6lYEfLlXDkUftHw5LQ9nRf7Jmslzmife9zkB_w95Y43qM_16F62wm8Sl9GOizOwIpB_EMi/embed?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQ5f8fhzrxR0EjPJWdB6OU1VTUTtHd0lvk8zs8GBrvW7xIwi1kDCNKYAIxW5YgQU4uWVIXujfkEM78n/embed?start=false&loop=false&delayms=3000"
    ];

const credits = "https://docs.google.com/presentation/d/e/2PACX-1vR-COo_xGCbs6gPqmo_yGKC2ypjIfXtSNceeFKhTMQmtqNrm8t5gwfLB_5nSVNv_fRHxVshgLL8bC7E/embed?start=true&loop=true&delayms=2000";



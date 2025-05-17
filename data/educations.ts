import type Education from '~/types/Education'

export const educationListFactory = (
  t: (key: string) => string,
): Education[] => [
  {
    title: t('master-of-computer-science'),
    companie: 'EPITA, FR',
    companieLink: 'https://www.epita.fr',
    description: t('epita-mti'),
  },
  {
    title: t('upec-dual-bachelor'),
    companie: t('upec'),
    companieLink: 'https://www.u-pec.fr',
  },
  {
    title: t('cmas-one-star-diver'),
    companie: t('blue-water-diving-center-mau'),
    companieLink: 'https://maps.app.goo.gl/6uhak8rajU8MWnm68',
  },
  {
    title: t('python-basics-for-data-science'),
    companie: 'Edx certificate PY0101EN: Python Basics for Data Science',
    companieLink:
      'https://courses.edx.org/certificates/692e878ca8584309a7f9b3e31d36445a',
  },
  {
    title: t('bac-s'),
    companie: t('school'),
  },
]

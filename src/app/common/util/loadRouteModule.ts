export default function (path: string) {
  return () => import(path).then(m => m.SettingModule)
}
type CustomCodeData = {
  customCss?: string | null;
  customCssHeader?: string | null;
  customCssFooter?: string | null;
  headScripts?: string | null;
  bodyStartScripts?: string | null;
  footerScripts?: string | null;
};

export function CustomCodeHead({ data }: { data: CustomCodeData | null }) {
  if (!data) return null;
  const css = [data.customCss, data.customCssHeader].filter(Boolean).join("\n");
  return (
    <>
      {css ? <style dangerouslySetInnerHTML={{ __html: css }} /> : null}
      {data.headScripts ? <script dangerouslySetInnerHTML={{ __html: data.headScripts }} /> : null}
    </>
  );
}

export function CustomCodeBodyStart({ data }: { data: CustomCodeData | null }) {
  if (!data?.bodyStartScripts) return null;
  return <script dangerouslySetInnerHTML={{ __html: data.bodyStartScripts }} />;
}

export function CustomCodeFooter({ data }: { data: CustomCodeData | null }) {
  if (!data) return null;
  return (
    <>
      {data.customCssFooter ? <style dangerouslySetInnerHTML={{ __html: data.customCssFooter }} /> : null}
      {data.footerScripts ? <script dangerouslySetInnerHTML={{ __html: data.footerScripts }} /> : null}
    </>
  );
}

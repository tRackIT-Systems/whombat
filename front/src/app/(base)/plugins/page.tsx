"use client";
import Hero from "@/components/Hero";
import PluginInfo from "@/components/PluginInfo";
import usePlugins from "@/hooks/api/usePlugins";

export default function Page() {
  const {
    items: plugins,
    query: { isLoading, isError },
  } = usePlugins();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Hero text="Sonari Plugins" />
      <div className="container p-4 mx-auto">
        <div>
          <p className="text-lg text-stone-700 dark:text-stone-300">
            This is the list of all plugins currently installed.{" "}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 py-6">
          {plugins?.map((plugin) => (
            <PluginInfo
              key={plugin.name}
              name={plugin.name}
              description={plugin.description}
              attribution={plugin.attribution}
              version={plugin.version}
              thumbnail={plugin.thumbnail}
              url={plugin.url}
            />
          ))}
        </div>
      </div>
    </>
  );
}

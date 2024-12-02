export function AboutSection() {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">À Propos de Nous</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/lovable-uploads/0e406229-70ec-421f-ae86-a6e5684c4843.png"
                alt="BELK Gardiennage Logo"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p>
                BELK GARDIENNAGE Maroc a été créé en 2021. Les Cadres Dirigeants qui la composent sont des Spécialistes Formés dans leur Domaine de Compétence.
              </p>
              <p>
                Nos secteurs d'intervention principaux sont les stades, complexes sportifs & culturels, les grandes surfaces & centres commerciaux, les administrations & services publics, et les entreprises privées.
              </p>
              <p>
                Ce qui fait la force de notre entreprise: nos hommes, le savoir-être et le savoir-faire de nos collaborateurs, le choix de la proximité au niveau de l'emploi et pour le choix des fournisseurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}